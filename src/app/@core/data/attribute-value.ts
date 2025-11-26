import { Observable } from 'rxjs';
export interface AttributeValue {
  id?: number;
  attributeId?: number;
  controlValue?: string;
  colorCode?: string;
  pictureId?: number;
  deleted?: boolean;
  createdBy?: string;
  createdOnUtc?: string;
  updatedOnUtc?: string;
  operation?: string;
}
  export abstract class AttributeValueData {
    abstract getAttributeValue(req:AttributeValue): Observable<any>;
    abstract dmlAttributeValue(req:AttributeValue): Observable<any>;
  }
  