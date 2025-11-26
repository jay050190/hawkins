import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, IsActiveMatchOptions, NavigationEnd, NavigationError, NavigationStart, Router ,Event} from '@angular/router';
import { Cart } from '../../@core/data/cart';
import { User } from '../../@core/data/users';
import { AuthenticateService } from '../../@core/services/authenticate.service';
import { CartService } from '../../@core/services/cart.service';

@Component({
  selector: 'ngx-e-header',
  templateUrl: './e-header.component.html',
  styleUrls: ['./e-header.component.scss']
})
export class EHeaderComponent implements OnInit {
  isChecked=false;
  cCount:number=0;
  hideMenu = true;
  loggedUser:User;
  @ViewChild('openCart') openCart: ElementRef;
  @ViewChild('closeMenuModel') closeModal: ElementRef;
  @ViewChild('openQuoteCart') openQuoteCart: ElementRef;
  @ViewChild('closeQuoteModel') closeQuoteModel: ElementRef;
  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
  constructor(private cartService:CartService,private authService:AuthenticateService,private router:Router,private activeRoute:ActivatedRoute) { 
    const cart:Cart = {CustomerId:0,SessionId:''};
    this.cartService.getCartCount(cart).subscribe(
      res => {
          console.log('cart count',res);
      }
    );

    // this.activeRoute.fragment.subscribe((value)=>{
    //     console.log(value);
    //     this.jumpTo(value);
    // });
  }

  ngOnInit(): void {
    this.routeSubscribe();
    this.loggedUser = this.authService.currentUserValue;
    this.cartService.cartCount.subscribe(value => {this.cCount = value});
    this.cartService.isCartDrawerOpen.subscribe(
      res => {
       if(res)
       {
        this.openCart.nativeElement.click();
       }
      }
    )
    this.cartService.isQuoteCartDrawerOpen.subscribe(
      res => {
       if(res)
       {
        this.openQuoteCart.nativeElement.click();
       }
      }
    )
    
  }

  routeSubscribe()
  {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          console.log('load',event);
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          console.log('end',event);
          this.jumpTo(event.url);
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });

  }
  jumpTo(section:string)
  {
    let indexOfHash = section.indexOf('#');
    if(section.indexOf('#')>-1)
    {
      let url = section.replace('#','').replace('/','');
      console.log(url);
      document.getElementById(url).scrollIntoView({behavior:'smooth'});
    }
  }

  ActionMenu()
  {
    if(this.hideMenu)
      this.hideMenu = false;
    else
      this.hideMenu = true;
  }
  redirectTo(routeName)
  {
    this.closeModal.nativeElement.click();
    this.isChecked=false;
    this.router.navigate([routeName]);
  }
  logout()
  {
    this.isChecked= false;
    this.authService.logout();
    this.loggedUser=null;
    this.router.navigate(['./home']);
  }



}
