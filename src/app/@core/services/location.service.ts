import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { LocationData } from '../data/location-entity';
@Injectable()
export class LocationService extends LocationData {
    getCountry(): Observable<any> {
      return this.http.get(environment.apiURL +`/Location/GetCountry`)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    getState(): Observable<any> {
      return this.http.get(environment.apiURL +`/Location/GetState`)
      .pipe(map(userResponse => {
        return userResponse;
      }));
    }
    getStateByCountry(countryId: number): Observable<any> {
      return this.http.get(environment.apiURL +`/Location/GetStateByCountry?countryId=`+countryId)
      .pipe(map(userResponse => {
        return userResponse;
      }));
    }

    constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
        super();
    }

   
}