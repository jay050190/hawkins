import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../../@core/data/cart';
import { User } from '../../@core/data/users';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { BannerService } from '../../@core/services/banner.service';
import { CartService } from '../../@core/services/cart.service';

@Component({
  selector: 'ngx-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartItem = [];
  totalAmt:number=0;
  totalItem:number=0;
  loggedUser:User;
  constructor(private cartService:CartService,private bannerService:BannerService,private router:Router,private authService:AuthenticateService) { }

  ngOnInit(): void {
    this.loadCart();
  }

  goToRoute(path:string)
  {
    this.loggedUser = this.authService.currentUserValue;

    if((this.loggedUser==null) && path.includes('checkout'))
    {
      this.router.navigate(['./user-login']);
    }
    else
    {
    this.router.navigate([path]);
    }
  }
  calculateSum(array, property):number {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);
    return total;
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
        alert('Item removed from cart');
        console.log("item removed: ",res);
      }
    );
  }
  updateQuantity(index,action,item)
  {
    let qty = this.cartItem[index].Quantity;
    if(action == 'add')
    {
      qty+=1;
      this.cartItem[index].Quantity = qty;
     
      this.addProduct(item.Id,1);
    }
    else
    {
      qty-=1;
      if(qty <= 0)
      {
        this.removeProduct(index,item.id)
      }
      else
      {
        this.cartItem[index].Quantity = qty;
        this.addProduct(item.Id,-1);
      }

    }
    
    this.cartItem[index].Total = qty * this.cartItem[index].SalePrice
    this.totalAmt = 0;
    this.totalItem = 0;
    this.totalAmt = this.calculateSum(this.cartItem,'Total');
    this.totalItem = this.calculateSum(this.cartItem,'Quantity');
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

  emptyCart()
  {
    const req:Cart = {CustomerId:0,SessionId:""};
    this.cartService.emptyCart(req).subscribe(
      (res)=>{
        this.cartItem = [];
        console.log('cart emptied');
      }
    );
  }
  
  loadCart()
  {
    this.cartItem= [];
    const req:Cart = {CustomerId:0,SessionId:''} 
    this.cartService.fetchCartItem(req).subscribe(
      (res)=>{
        if(res.success===true)
        {
          res.data.forEach(element => {
            if(element.img)
            element.img = this.bannerService.getSanitizedImagePath(element.img);
            else
            element.img = '../../../assets/images/no-image.png'
            this.cartItem.push(element)
        });
        if(this.cartItem)
        {
        this.totalAmt = this.calculateSum(this.cartItem,'Total');
        this.totalItem = this.calculateSum(this.cartItem,'Quantity');
        }
        console.log("cartitem",this.cartItem);
        }
      }
    );
  }
}
