import { Observable } from 'rxjs';
export interface Country {
    id?: number;
    name?: string;
    twoLetterIsoCode?: string;
    currency?: string;
    symbol?: string;
    displayOrder?: number;
    deleted?: boolean;
    createdBy?: string;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    operation?: string;

  }
  
  export abstract class CountryData {
    abstract getCountry(req:Country): Observable<any>;
    abstract dmlCountry(req:Country): Observable<any>;
  }
  