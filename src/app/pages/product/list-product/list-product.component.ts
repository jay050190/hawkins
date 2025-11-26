import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ProductData } from '../../../@core/data/product';
import { ImgThumbnail } from './img-thumbnail';

@Component({
  selector: 'ngx-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  cussettings = {
    columns: {  
      doc: {
        title: '',
        type: 'custom',
        renderComponent: ImgThumbnail,
        filter:false,
        width:'50px'
      }, 
      name: {
        title: 'Name',
        type: 'string',
        filter: true
      },
      categoryName: {
        title: 'Category',
        type: 'string',
        filter: true
      },
      brandName: {
        title: 'Brand',
        type: 'string',
        filter: true
      },
      published: {
        title: 'Published',
        type: 'string',
        filter: true
      },
      
    },
    actions: {
    add: false,
    edit: false,
    delete: false
    }
  };
  productList=[];
  cussource: LocalDataSource = new LocalDataSource();

  constructor(private router: Router,private productService:ProductData) { 

    
    let res = this.productService.getAllProduct(0);
        if(res["success"]===true)
        {
          this.productList = res["data"];
          this.cussource.load(this.productList);
        }
  }

  ngOnInit(): void {
  }

  gotoExportPage()
  {
    this.router.navigate(['pages/product/add-product']);
  }
  
  goToAddProduct()
  {
    this.router.navigate(['pages/product/export-product']);
  }
}
