import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cart, CartData, CustomerAddress,QuoteCartItem } from '../data/cart';
import { map } from 'rxjs/operators';
@Injectable()
export class FilterService {

    public getRemovedFilterItem = new BehaviorSubject<any>(null);

    setRemovedFilterData(data)
    {
      this.getRemovedFilterItem.next(data);
    }
}