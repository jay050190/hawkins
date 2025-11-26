import { Observable } from 'rxjs';
export interface Country {
    id?: number;
    name?: string;
  }

  export interface State {
    id?: number;
    name?: string;
  }
  
  export abstract class LocationData {
    abstract getCountry(): Observable<any>;
    abstract getState(): Observable<any>;
    abstract getStateByCountry(req:number): Observable<any>;
  }
  