import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Category, CategoryData } from '../data/category';
import { map } from 'rxjs/operators';
import { AttributeValueData, AttributeValue } from '../data/attribute-value';
@Injectable()
export class AttributeValueService extends AttributeValueData {
    getAttributeValue(req: AttributeValue): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/AttributeValueMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    dmlAttributeValue(req: AttributeValue): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/AttributeValueMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    constructor(private http: HttpClient) {
        super();
    }

    
}