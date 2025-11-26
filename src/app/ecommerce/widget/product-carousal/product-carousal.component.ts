import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Cart, QuoteCartItem } from '../../../@core/data/cart';
import { CartService } from '../../../@core/services/cart.service';

@Component({
  selector: 'ngx-product-carousal',
  templateUrl: './product-carousal.component.html',
  styleUrls: ['./product-carousal.component.scss']
})
export class ProductCarousalComponent implements OnInit {

  @Input() item;
  @Input() noofItems = 5;
  bannerItem:any;
  customOptionsInner: OwlOptions = {
    loop: false,
    rtl:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav:true,
    navSpeed: 700,
    navText: [ '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>', '<button class="prev-arrow"><img src="../../../assets/images/ecommerce/left-icon-arrow.svg"></button>' ],
    responsive: {
      0: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      400: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      740: {
        items: 2,
        margin: 5,
        autoHeight : true
      },
      940: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1024: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1200: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1300: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1400: {
        items: 5,
        margin: 5,
        autoHeight : true
      },
      1600: {
        items: 5,
        margin: 5,
        autoHeight : true
      }
    }
  }
  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.bannerItem = this.item.bannerItem;
  }
  redirectTo(navUrl,searchtext: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this.router.navigate([navUrl], {
      queryParams: {
        product: searchtext
      },
    })
    );
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
   let item:QuoteCartItem = {ProductId:prdItem.id,Img:prdItem.img,ProductName:prdItem.name,SalePrice:prdItem.SalePrice,Quantity:1,Total:prdItem.SalePrice};
   this.cartService.addQuoteCartItem(item);
   this.cartService.openQuoteCartDrawer(true);
 }

 
}
