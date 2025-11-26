import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CustomerAddress } from '../../@core/data/cart';
import { User } from '../../@core/data/users';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { BannerService } from '../../@core/services/banner.service';
import { CartService } from '../../@core/services/cart.service';

@Component({
  selector: 'ngx-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  loggedUser:User;
  customerAddresses=[];
  cartItem=[];
  totalItem = 0;
  totalAmt = 0;
  step1=true;
  step2=false;
  step3=false;
  selectedAddress;

  constructor(private cartService:CartService,private bannerService:BannerService,private router:Router,private authService:AuthenticateService) { 
    this.loggedUser = this.authService.currentUserValue;
    if(this.loggedUser==null)
    {
      this.router.navigate(['./user-login']);
    }
  }
  alertbox()
  {
    alert('sdsdsdsd');
  }
  stepper(one,two,three)
  {
    this.step1 = one;
    this.step2 = two;
    this.step3 = three;
  }
  finalorder()
  {
    this.stepper(false,false,true);
    const req:Cart = {CustomerId:this.loggedUser.id,SessionId:""};
    this.cartService.emptyCart(req).subscribe(
      (res)=>{
        this.cartItem = [];
        console.log('cart emptied');
      }
    );
  }
  ngOnInit(): void {
    this.loadAddressOfCustomer();
    this.loadCart();
  }

  placeOrder(selectedAddress)
  {
    this.selectedAddress = selectedAddress;
    this.stepper(false,true,false);

  }
  goToRoute(path:string)
  {
   
    this.router.navigate([path]);
  }
  calculateSum(array, property):number {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);
    return total;
  }
  loadCart()
  {
    this.cartItem= [];
    const req:Cart = {CustomerId:this.loggedUser.id,SessionId:''} 
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
  loadAddressOfCustomer()
  {
    const req:CustomerAddress = {CustomerId:this.loggedUser.id,Operation:"G"};
    this.cartService.customerAddress(req).subscribe(
      (res)=>{
        if(res.success === true)
        {
          this.customerAddresses = res.data;
          console.log(this.customerAddresses);
        }
      }
    );
  }

}
