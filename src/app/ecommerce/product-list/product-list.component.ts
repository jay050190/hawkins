import { Component, ElementRef, EventEmitter, OnInit, Output, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import 'rxjs/add/operator/filter';
import { BannerData } from '../../@core/data/banner';
import { Cart, QuoteCartItem } from '../../@core/data/cart';
import { ProductData } from '../../@core/data/product';
import { CartService } from '../../@core/services/cart.service';
import { LoaderService } from '../../@core/services/loader.service';
import {SearchFilter} from '../../@core/data/search-filter';
import { FilterService } from '../../@core/services/filter.service';
@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  prdCount = 0;
  filterHidden= false;
  pageIndex = -1;
  loadedItemCount = 0;
  totalProductCount = 0;
  srchTxt = "";
  selectedSortedOption = "";
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    nav:false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }
itemData = [];
  slidesStore = [
    {id:"1",src:"../../../assets/images/ecommerce/search-by-pressure-cookers.png",alt:"banner1",title:"banner1"},
    {id:"2",src:"../../../assets/images/ecommerce/search-by-pressure-cookers.png",alt:"banner2",title:"banner2"},
    {id:"3",src:"../../../assets/images/ecommerce/search-by-pressure-cookers.png",alt:"banner3",title:"banner3"},
  ]

  categoryId:string="0";
  subCategoryId:string="0";
  catType:string="CAT";
  productId:number;
  searchArr = [];
  srch:SearchFilter;
  filterOption: any = {category:0,subCategory:0};
  constructor(private route: ActivatedRoute,private productService: ProductData,private bannerService:BannerData
    ,private cartService:CartService
    ,public loader:LoaderService,private filterService:FilterService) { }

  async ngOnInit() {
    this.loader.setLoading(true);
    if(this.getIsMobile())
    {
      this.filterHidden = true;
    }

    await this.readQueryParam();
    let categories = "0";
    if(this.categoryId && this.catType == 'CAT')
    {
      categories = this.categoryId;
    }
    else if(this.categoryId && this.catType == 'SUBCAT')
    {
      categories = this.subCategoryId;
    }
    if(this.catType == 'SRCH')
    {
      this.srch = {Param1:this.srchTxt,Param2:"0",Param3:"0",Param4:"0"}
      await this.loadProductSearchTextData(this.srch);
    }
    // else
    // {
    //   debugger;
    //   this.srch = {CategorysId:categories,Groupcodes:"0",AttributesId:"0",catType:this.catType}
    //   await this.loadProductData(this.srch);
    // }
  }

  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  
  async SortFilterApplied(sortval)
  {
    
    this.srch.SortBy = sortval;
    if(this.srch.catType == 'SRCH')
    {
      await this.loadProductSearchTextData(this.srch,true);
    }
    else
    {
      await this.loadProductData(this.srch,true);
    }
  }

  addProduct(id)
  {
    const cart:Cart = {ProductId:id,Quantity:1,CustomerId:0}
    this.cartService.addToCart(cart).subscribe(
      (res)=>{
        this.cartService.openCartDrawer(true);
      }
    );
  }
  addProductToQuote(prdItem)
  {
    let item:QuoteCartItem = {ProductId:prdItem.Id,Img:prdItem.img,ProductName:prdItem.ProductName,SalePrice:prdItem.SalePrice,Quantity:1,Total:prdItem.SalePrice};
    this.cartService.addQuoteCartItem(item);
    this.cartService.openQuoteCartDrawer(true);
  }
  getCartCount()
  {
    const cart:Cart = {CustomerId:0,SessionId:''};
    this.cartService.getCartCount(cart).subscribe(
      res => {
          console.log('cart count',res);
      }
    )
  }
  showFilterWindow()
  {
    this.filterHidden = false;
  }
  updateShowFilterWindow(value)
  {
    this.filterHidden = value;
  }

  removeFilter(rmData)
  {
    this.filterService.setRemovedFilterData(rmData);
  }

 async searchByFilter(data:any)
  {
    this.searchArr = [];
    let searchparam:SearchFilter = {CategorysId:"",Groupcodes:"",AttributesId:""}
    const param = data.param;
    for (let key in param) {
      let value = param[key];
      value.index = key;
      console.log(value);
      this.searchArr.push(value);
      // Use `key` and `value`
    }
    searchparam.CategorysId =  this.searchArr.filter((obj) => {return (obj.type === 'CAT')}).map(t=>t.id).toString();
    searchparam.Groupcodes =  this.searchArr.filter((obj) => {return (obj.type === 'GROUP')}).map(t=>t.id).toString();
    searchparam.AttributesId =  this.searchArr.filter((obj) => {return (obj.type === 'ATR')}).map(t=>t.id).toString();
    if(this.getIsMobile())
    {
      this.filterHidden = true;
    }

    this.itemData = [];
    this.pageIndex  = -1;
    if(searchparam.CategorysId=="")
      searchparam.CategorysId = "0";
    if(searchparam.Groupcodes=="")
      searchparam.Groupcodes = "0";
    if(searchparam.AttributesId=="")
      searchparam.AttributesId = "0";

    //   else
    // {
    //   this.srch = {CategorysId:categories,Groupcodes:"0",AttributesId:"0",catType:this.catType}
    //   await this.loadProductData(this.srch);
    // }
    searchparam.catType = data.type;
    await this.loadProductData(searchparam);
  }

  
  async loadProductSearchTextData(srch:SearchFilter,isSort:boolean = false)
{

  this.totalProductCount =0;
  this.loader.setLoading(true);
  if(!isSort)
    this.pageIndex+=1;
  else
  {
    this.pageIndex = 0;
    this.itemData = []
  }
    
  srch.PageIndex = this.pageIndex;
  let res =await this.productService.listProductSearch(srch)
  if(res.data.length<1)
  {
    this.loader.setLoading(false);
    return;
  }
      this.totalProductCount = res.data[0].totalItemCount;
      res.data.forEach(element => {
        this.loadedItemCount+=1;
          if(element.img)
          element.img = this.bannerService.getSanitizedImagePath(element.img);
          else
          element.img = '../../../assets/images/no-image.png'
          this.itemData.push(element)
      });
      this.loader.setLoading(false);
   
}
async loadProductData(srch:SearchFilter,isSort:boolean = false)
{
  this.totalProductCount =0;
  this.loader.setLoading(true);
  if(!isSort)
  this.pageIndex+=1;
else
{
  this.pageIndex = 0;
  this.itemData = []
}
  srch.PageIndex = this.pageIndex;
  let res =await this.productService.listProduct(srch)
  if(res.data.length<1)
  {
    this.loader.setLoading(false);
    return;
  }
      this.totalProductCount = res.data[0].totalItemCount;
      res.data.forEach(element => {
        this.loadedItemCount+=1;
          if(element.img)
          element.img = this.bannerService.getSanitizedImagePath(element.img);
          else
          element.img = '../../../assets/images/no-image.png'
          this.itemData.push(element)
      });
      this.loader.setLoading(false);
   
}

  async readQueryParam()
  {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.category;
      this.subCategoryId = params.subCategory;
      this.catType = params.catType;
      this.srchTxt = params.srchtxt;
      this.filterOption.category = this.categoryId;
      this.filterOption.subCategory = this.subCategoryId;
    }
  );
  }

}
