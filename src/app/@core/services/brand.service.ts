import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BrandEntity, BrandData } from '../data/brand-entity';
import { map } from 'rxjs/operators';
@Injectable()
export class BrandService extends BrandData {

    constructor(private http: HttpClient) {
        super();
    }

    getBrand(req: BrandEntity): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/BrandMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    dmlBrand(req: BrandEntity): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/BrandMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    getAttribute(req: BrandEntity): Observable<any> {
      return this.http.post(environment.apiURL +`/Master/AttributeMaster`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }
  dmlAttribute(req: BrandEntity): Observable<any> {
      return this.http.post(environment.apiURL +`/Master/AttributeMaster`, req)
      .pipe(map(userResponse => {
        return userResponse;
      }));
  }
}