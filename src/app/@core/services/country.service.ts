import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Country, CountryData } from '../data/country';
@Injectable()
export class CountryService extends CountryData {

    constructor(private http: HttpClient) {
        super();
    }

    getCountry(req: Country): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/CountryMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    dmlCountry(req: Country): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/CountryMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
}