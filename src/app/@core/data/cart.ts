import { Observable } from 'rxjs';
export interface Cart {
    Id?: number;
    SessionId?: string;
    Img?:any;
    CustomerId?: number;
    ProductId?: number;
    Quantity?: number;
  }
  export interface QuoteCartItem {
      ProductId?: number;
      ProductName?: string;
      Img?:any;
      SalePrice?: number;
      Quantity?: number;
      Total?:number;
  }
  export interface CustomerAddress {
    Id?: number;
    CountryId?: number;
    CountryName?: string,
    CustomerId?: number;
    StateProvinceId?: number;
    StateName?:number;
    FirstName?: string;
    LastName?: string;
    Company?: string;
    City?: string;
    Address1?: string;
    Address2?: string;
    ZipPostalCode?: string;
    PhoneNumber?: string;
    Operation?: string;
  }
  
  export abstract class CartData {
    abstract getCartSession(): Observable<any>;
    abstract addToCart(req:Cart): Observable<any>;
    abstract customerAddress(req:CustomerAddress): Observable<any>;
  }
  