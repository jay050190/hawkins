import { Component, EventEmitter, Input, OnInit ,Output,SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { ProductData } from '../../../@core/data/product';
import { SearchFilter } from '../../../@core/data/search-filter';
import { LoaderService } from '../../../@core/services/loader.service';

@Component({
  selector: 'ngx-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.scss']
})
export class SearchTextComponent implements OnInit {

  

  @Input() panelVisible!: boolean;
  @Output() filterClosedEvent = new EventEmitter<boolean>();
  @Output() onSearchEvent = new EventEmitter<any>();
  keyword = 'name';
  data = [];
  spinner = false;
  maxnumber=10;
  constructor(public loader:LoaderService
    ,private productService:ProductData,private router:Router) { }

  async ngOnInit() {
  }

  selectEvent(item) {
    this.redirectTo(item.name);
    // do something with selected item
  }

  async onChangeSearch(val: string) {
    this.spinner = true;
    let srch:SearchFilter = {Param1:val}
    let res = await this.productService.productListAutoComplete(srch)
    this.data = res.data;
    this.spinner = false;
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }

  searchProduct(searchtext)
  {
    // this.router.navigate(['/product-list'], {
    //   queryParams: {
    //     srchtxt: searchtext, 
    //     catType:'SRCH'
    //   },
    // });
    this.redirectTo(searchtext);
  }
  hide()
  {
    this.filterClosedEvent.emit(false);
  }

  redirectTo(searchtext: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate(['/product-list'], {
      queryParams: {
        srchtxt: searchtext, 
        catType:'SRCH'
      },
    })
    );
 }
  
}
