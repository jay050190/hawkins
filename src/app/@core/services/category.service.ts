import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Category, CategoryData } from '../data/category';
import { map } from 'rxjs/operators';
@Injectable()
export class CategoryService extends CategoryData {

    constructor(private http: HttpClient) {
        super();
    }

    getCategory(req: Category): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/CategoryMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    dmlCategory(req: Category): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/CategoryMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
}