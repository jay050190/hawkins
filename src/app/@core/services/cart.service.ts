import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cart, CartData, CustomerAddress,QuoteCartItem } from '../data/cart';
import { map } from 'rxjs/operators';
@Injectable()
export class CartService extends CartData {

  public cartCount = new BehaviorSubject<number>(0);
  public isCartDrawerOpen = new BehaviorSubject<boolean>(false);
  public isQuoteCartDrawerOpen = new BehaviorSubject<boolean>(false);
  public getQuoteCartItem = new BehaviorSubject<QuoteCartItem[]>([]);

    getCartSession(): Observable<any> {
        return this.http.get(environment.apiURL+ `/Authenticate/GenerateAppSession`)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    removeFromCart(req:Cart): Observable<any> {
        return this.http.post(environment.apiURL+ `/Authenticate/RemoveFromCart`,req)
        .pipe(map(userResponse => {
          this.getCartCount(req).subscribe(res=>{ console.log("getcartcout service called");});
          return userResponse;
        }));
    }
    addToCart(req:Cart): Observable<any> {
      return this.http.post(environment.apiURL+ `/Authenticate/AddToCart`,req)
      .pipe(map(userResponse => {
        this.getCartCount(req).subscribe(res=>{ console.log("getcartcout service called");});
        return userResponse;
      })); 
  }

  openCartDrawer(boolValue)
  {
    this.isCartDrawerOpen.next(boolValue);
  }
  
  customerAddress(req:CustomerAddress): Observable<any> {
    return this.http.post(environment.apiURL+ `/Authenticate/AddCustomerAddress`,req)
    .pipe(map(userResponse => {
      return userResponse;
    }));
  }

  fetchCartItem(req:Cart): Observable<any> {
    return this.http.post(environment.apiURL+ `/Authenticate/FetchCartItem`,req)
    .pipe(map(userResponse => {
      return userResponse;
    }));
  }

  emptyCart(req:Cart): Observable<any> {
    return this.http.post(environment.apiURL+ `/Authenticate/EmptyCart`,req)
    .pipe(map(userResponse => {
      this.getCartCount(req).subscribe(res=>{ console.log("getcartcout service called");});
      return userResponse;
    }));
  }

  getCartCount(req:Cart): Observable<any> {
    return this.http.post(environment.apiURL+ `/Authenticate/GetCount`,req)
    .pipe(map(cartCountRes => {
      const count = parseInt(cartCountRes["data"]);
      this.cartCount.next(count);
      return cartCountRes;
    }));
  }

    openQuoteCartDrawer(boolValue)
  {
    this.isQuoteCartDrawerOpen.next(boolValue);
  }

  getQuoteCartItemValues()
  {
    return this.getQuoteCartItem.value;
  }
  addQuoteCartItem(req:QuoteCartItem) {
    let currentValue = this.getQuoteCartItem.value;
    const index = currentValue.findIndex(element => {
      if (element.ProductId === req.ProductId) {
        return true;
      }
      return false;
    });
    if(index>-1)
    {
      let currItem = currentValue[index];
      currItem.Quantity = 1;
      currentValue[index].Quantity = currItem.Quantity;
      currentValue[index].Total = currItem.Quantity * currItem.SalePrice;
      this.getQuoteCartItem.next(currentValue);
    }
    else
    {
      const updatedValue = [...currentValue, req];
      this.getQuoteCartItem.next(updatedValue);
    }
  }

  updateQuoteCartItem(req:QuoteCartItem) {
    const currentValue = this.getQuoteCartItem.value;
    const updatedValue = [...currentValue, req];
    this.getQuoteCartItem.next(updatedValue);
  }

  deleteQuoteCartItem(req:QuoteCartItem) {
    let currentValue = this.getQuoteCartItem.value;
    const index = currentValue.findIndex(element => {
      if (element.ProductId === req.ProductId) {
        return true;
      }
      return false;
    });

    if(index>-1)
    {
      let currItem = currentValue[index];
      if(currItem.Quantity <= 1)
      {
        currentValue.splice(index,1);
      }
      else
      {
        currItem.Quantity -= 1
        currentValue[index].Quantity = currItem.Quantity;
        currentValue[index].Total = currItem.Quantity * currItem.SalePrice;
      }
      this.getQuoteCartItem.next(currentValue);
    }
  }
  

    constructor(private http: HttpClient) {
        super();
    }

}