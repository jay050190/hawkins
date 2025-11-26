import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, QuoteCartItem } from '../../@core/data/cart';
import { User } from '../../@core/data/users';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { BannerService } from '../../@core/services/banner.service';
import { CartService } from '../../@core/services/cart.service';

@Component({
  selector: 'ngx-quote-cart',
  templateUrl: './quote-cart.component.html',
  styleUrls: ['./quote-cart.component.scss']
})
export class QuoteCartComponent implements OnInit {
  @Output() CartClosedEvent = new EventEmitter<boolean>();
  cartItem:QuoteCartItem[] = [];
  totalAmt:number=0;
  totalItem:number=0;
  loggedUser:User;
  @ViewChild('closeModal') closeModal: ElementRef;

  constructor(private cartService:CartService,private bannerService:BannerService,private router:Router,private authService:AuthenticateService) { }
  
  ngOnInit(): void {
    this.cartService.isQuoteCartDrawerOpen.subscribe(
      res => {
       if(res)
       {
        this.loadQuoteCart();
       }
      }
    )
    this.cartService.getQuoteCartItem.subscribe(
      res => {
        if(res)
        {
          this.cartItem = res;
          this.totalAmt = this.calculateSum(this.cartItem,'Total');
          this.totalItem = this.calculateSum(this.cartItem,'Quantity');
        }
       }
    )
  }

  loadQuoteCart()
  {
    this.cartItem = this.cartService.getQuoteCartItemValues();
    this.totalAmt = this.calculateSum(this.cartItem,'Total');
    this.totalItem = this.calculateSum(this.cartItem,'Quantity');
  }

  updateQuantity(index,action,item)
  {
    if(action == 'add')
    {
      this.cartService.addQuoteCartItem(item);
    }
    else
    {
      this.cartService.deleteQuoteCartItem(item);
    }
  }

  addProduct(productId,quantity)
  {
    const cart:Cart = {ProductId:productId,Quantity:quantity,CustomerId:0}
    this.cartService.addToCart(cart).subscribe(
      (res)=>{
        //this.getCartCount();
        alert('cart updated!');
        console.log("item addedd: ",res);
      }
    );
  }

  removeProduct(index,productId)
  {
    const cart:Cart = {ProductId:productId,Quantity:0,CustomerId:0}
    this.cartService.removeFromCart(cart).subscribe(
      (res)=>{
        //this.getCartCount();
        this.cartItem.splice(index,1);
        this.totalAmt = 0;
        this.totalItem = 0;
        this.totalAmt = this.calculateSum(this.cartItem,'Total');
        this.totalItem = this.calculateSum(this.cartItem,'Quantity');
      }
    );
  }
  calculateSum(array, property):number {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);
    return total;
  }
  goToRoute(path:string)
  {
    this.loggedUser = this.authService.currentUserValue;

    if((this.loggedUser==null) && path.includes('checkout'))
    {
      // this.router.navigate(['./user-login']);
      this.redirectTo('./user-login')
    }
    else
    {
      this.redirectTo(path)
    }
  }


 redirectTo(path) {
  this.closeModal.nativeElement.click();
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
  this.router.navigate([path])
  );
}

  closeCartBox()
  {
    this.CartClosedEvent.emit(false);
  }

}
