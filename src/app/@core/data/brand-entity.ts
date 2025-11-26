import { Observable } from 'rxjs';
export interface BrandEntity {
    id?: number;
    name?: string;
    description?: string;
    attributeFor?:string;
    shape?:string;
    deleted?: boolean;
    createdBy?: string;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    operation?: string;
    controlType?:string;
  }
  
  export abstract class BrandData {
    abstract getBrand(req:BrandEntity): Observable<any>;
    abstract dmlBrand(req:BrandEntity): Observable<any>;
    abstract getAttribute(req:BrandEntity): Observable<any>;
    abstract dmlAttribute(req:BrandEntity): Observable<any>;
  }
  