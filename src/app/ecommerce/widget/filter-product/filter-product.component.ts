import { Component, EventEmitter, HostListener, Input, OnInit ,Output,QueryList,SimpleChanges, ViewChildren} from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterInfo } from '../../../@core/data/filter';
import { ProductData } from '../../../@core/data/product';
import { FilterService } from '../../../@core/services/filter.service';
import { LoaderService } from '../../../@core/services/loader.service';

@Component({
  selector: 'ngx-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent implements OnInit {

  totalCount:number = 0;
  categories = [];
  groups = [];
  attributes = [];
  selectedCategories = [];
  selectedGroups = [];
  selectedAttributes = [];
  filterDict: { [key: string]: FilterInfo } = {};
  sub:Subscription;
  @Input() panelVisible!: boolean;
  @Input() selectedFilterOption: any = {category:0,subCategory:0};
  @Output() filterClosedEvent = new EventEmitter<boolean>();
  @Output() onSearchEvent = new EventEmitter<any>();
  @ViewChildren ('catcheckbox' ) catcheckbox:QueryList<any>;
  @ViewChildren ('groupcheckbox' ) groupcheckbox:QueryList<any>;
  @ViewChildren ('attrcheckbox' ) attrcheckbox:QueryList<any>;

  showProductType = false;
  showAttributes = false;
  constructor(public loader:LoaderService
    ,private productService:ProductData,private filterService:FilterService) { 
    }

  async ngOnInit() {
    await this.getFilterOption();
    if(this.selectedFilterOption.category > 0)
    {
      const index = this.getDictId('CAT',this.selectedFilterOption.category)
      const prop = this.getObject('CAT',this.selectedFilterOption.category)
      await this.getFilteredDrillOptionFromQryStr(true,'CAT',prop,index);
    }
    if(this.selectedFilterOption.subCategory > 0)
    {
      const index = this.getDictId('GROUP',this.selectedFilterOption.subCategory)
      const prop = this.getObject('GROUP',this.selectedFilterOption.subCategory)
      await this.getFilteredDrillOptionFromQryStr(true,'GROUP',prop,index);
    }
    

     this.sub = this.filterService.getRemovedFilterItem.subscribe(
      async res => {
       if(res)
       {
        // this.openQuoteCart.nativeElement.click();
        if(res)
        {
          this.findAndCallCheckEvent(res);
          this.getFilteredDrillOptionFromQryStr(false,res.type,res,res.index);
          await this.searchproduct();
        }
       }
      }
    );
    await this.searchproduct();
  }
  public ngOnDestroy(): void {
    this.sub.unsubscribe(); // or something similar
  }
  
  hide()
  {
    this.filterClosedEvent.emit(true);
  }

  async clearfilter()
  {
    this.selectedCategories=[];
    this.selectedGroups=[];
    this.selectedAttributes=[];
    
    this.showFilterFragment(false,false);
    await this.getFilterOption();
    this.searchproduct();
  }
async searchproduct()
{
  //const searchReq = {categories:this.selectedCategories.toString(),group:this.selectedGroups.toString(),attr:this.selectedAttributes.toString(),cattype:'CAT'}
  const searchReq = {param:this.filterDict,type:'CAT'}
  this.onSearchEvent.emit(searchReq);
}
  async getFilteredDrillOption(event,ops,filter,dictid)
  {
    if(ops == 'CAT')
    {
      this.selectedGroups = [];
      this.selectedAttributes = [];
      if(event.target.checked)
      {
        this.selectedCategories.push(filter.id);
        this.filterDict[dictid] = {id:filter.id,name:filter.cat,type:ops}
      }
      else
      {
        delete this.filterDict[dictid];
        let index = this.selectedCategories.indexOf(filter.id);
        this.selectedCategories.splice(index, 1);
      }
      
      await this.getFilterOptionByCategory();
      if(this.selectedCategories.length>0)
        this.showFilterFragment(true,false)
      else
      {
        this.showFilterFragment(false,false);
        this.deleteUnselectedKey('GROUP');
        this.deleteUnselectedKey('ATR');
      }
       
    }
    else if(ops == 'GROUP')
    {
      this.selectedAttributes = [];
      if(event.target.checked)
      {
        this.selectedGroups.push(filter.GroupCode);
        this.filterDict[dictid] = {id:filter.GroupCode,name:filter.GroupCode,type:ops}
      }
      else
      {
        let index = this.selectedGroups.indexOf(filter.GroupCode);
        this.selectedGroups.splice(index, 1);
        delete this.filterDict[dictid];
      }
      await this.getFilterOptionByGroup();
      if(this.selectedGroups.length>0)
        this.showFilterFragment(true,true)
      else
      {
        this.showFilterFragment(true,false);
        this.deleteUnselectedKey('GROUP');
        this.deleteUnselectedKey('ATR');
      }
        
    }
  }
  async getFilteredDrillOptionFromQryStr(eventVal,ops,filter,dictid)
  {
    if(ops == 'CAT')
    {
      this.selectedGroups = [];
      this.selectedAttributes = [];
      if(eventVal)
      {
        this.selectedCategories.push(filter.id);
        this.filterDict[dictid] = {id:filter.id,name:filter.cat,type:ops}
      }
      else
      {
        delete this.filterDict[dictid];
        let index = this.selectedCategories.indexOf(filter.id);
        this.selectedCategories.splice(index, 1);
      }
      
      await this.getFilterOptionByCategory();
      if(this.selectedCategories.length>0)
        this.showFilterFragment(true,false)
      else
      {
        this.showFilterFragment(false,false);
        this.deleteUnselectedKey('GROUP');
        this.deleteUnselectedKey('ATR');
      }
       
    }
    else if(ops == 'GROUP')
    {
      this.selectedAttributes = [];
      if(eventVal)
      {
        this.selectedGroups.push(filter.GroupCode);
        this.filterDict[dictid] = {id:filter.GroupCode,name:filter.GroupCode,type:ops}
      }
      else
      {
        let index = this.selectedGroups.indexOf(filter.GroupCode);
        this.selectedGroups.splice(index, 1);
        delete this.filterDict[dictid];
      }
      await this.getFilterOptionByGroup();
      if(this.selectedGroups.length>0)
        this.showFilterFragment(true,true)
      else
      {
        this.showFilterFragment(true,false);
        this.deleteUnselectedKey('GROUP');
        this.deleteUnselectedKey('ATR');
      }
        
    }
  }
  setSelectedAttributes(event,data,dictid)
  {
    if(event.target.checked)
      {
        this.selectedAttributes.push(data.id);
        this.filterDict[dictid] = {id:data.id,name:data.attributeOption,type:"ATR"}
      }
      else
      {
        let index = this.selectedAttributes.indexOf(data.id);
        this.selectedAttributes.splice(index, 1);
        delete this.filterDict[dictid];
      }
  }
  async getFilterOption()
  {
    //this.loader.setLoading(true);
    let params = 0
    let res =await this.productService.getFilterOption('ALL','0')
    if(res)
    {
      this.totalCount = res.data[0].totalCount;
      this.categories = JSON.parse(res.data[0].Categorys);
      this.groups = JSON.parse(res.data[0].Groups);
      this.attributes = JSON.parse(res.data[0].Attributes);
    }
    console.log("filter option",res);
    //this.loader.setLoading(false); 
  }
  async getFilterOptionByCategory()
  {
    //this.loader.setLoading(true);
    let selectedValues = this.selectedCategories.toString();
    let cat = "CAT";
    if(selectedValues=="")
    {
      selectedValues = "0";
      cat = "ALL"
    }
   
    let res =await this.productService.getFilterOption(cat,selectedValues)
    if(res)
    {
      this.groups = JSON.parse(res.data[0].Groups);
      this.attributes = JSON.parse(res.data[0].Attributes);
    }
    //this.loader.setLoading(false); 
  }
  async getFilterOptionByGroup()
  {
    //this.loader.setLoading(true);
    let res =await this.productService.getFilterOption('GROUP',this.selectedGroups.toString())
    if(res)
    {
      this.attributes = JSON.parse(res.data[0].Attributes);
    }
    //this.loader.setLoading(false); 
  }

  showFilterFragment(prdtype,attr)
  {
    this.showProductType = prdtype;
    this.showAttributes = attr;
  }
  deleteUnselectedKey(filterType:string)
  {
    let dict = this.filterDict;
    for (let key in dict) {
      let cls = dict[key];
      if(filterType == cls.type)
        delete this.filterDict[key];
      // Use `key` and `value`
    }
  }

  getObject(type,value)
  {
    let prop:any; 
    if(type == 'CAT')
      prop = this.categories.find((cat) => cat.id == value);
    if(type == 'GROUP')
    {
      prop = this.groups.find((grp) => grp.GroupId == value);
    }   
    return prop;
  }
  getDictId(type,value)
  {
    let index = '';
    if(type == 'CAT')
      index = 'c'+this.categories.findIndex(x => x.id == value);
    if(type == 'GROUP')
      index = 'g'+this.groups.findIndex(x => x.GroupId == value);
    return index;
  }

  findAndCallCheckEvent(data)
  {
    if(data.type == "CAT")
    {
      let cat = this.catcheckbox;
      this.catcheckbox.toArray().forEach((check, index) => {
        if(check.nativeElement.name == data.index)
          check.nativeElement.click();
    });
    }
    else if(data.type == "GROUP")
    {
      this.groupcheckbox.toArray().forEach((check, index) => {
        if(check.nativeElement.name == data.index)
          check.nativeElement.click();
      });
    }
    else
    {
      this.attrcheckbox.toArray().forEach((check, index) => {
        if(check.nativeElement.name == data.index)
          check.nativeElement.click();
      });
    }
  }
}
