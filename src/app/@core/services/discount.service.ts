import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { DiscountData, Discount } from '../data/discount';
@Injectable()

export class DiscountService extends DiscountData {

  async getAllDiscount(req: Discount): Promise<any> {
    let model: any;
    await this.http.post(environment.apiURL + `/Discount/DiscountMaster`, req)
      .toPromise()
      .then(res => { model = res })
      .catch(err => { model = undefined });
    return model;
  }

  AddDiscount(req: Discount): Observable<any> {
    return this.http.post(environment.apiURL + `/Discount/DiscountMaster`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }

  DeleteDiscount(req: Discount): Observable<any> {
    return this.http.post(environment.apiURL + `/Discount/DiscountMaster`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }

  UpdateDiscount(req: Discount): Observable<any> {
    return this.http.post(environment.apiURL + `/Discount/DiscountMaster`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }

  getDiscountType(req: any): Observable<any> {
    return this.http.post(environment.apiURL + `/Discount/GetDiscountType`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }

  constructor(private http: HttpClient) {
    super();
  }

}
