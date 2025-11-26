import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BrandEntity } from '../data/brand-entity';
import { map } from 'rxjs/operators';
import { BannerData } from '../data/banner';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class BannerService extends BannerData {

    constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
        super();
    }

    async items(operation: string): Promise<any> {
      let model: any;
      await this.http.get(environment.apiURL +`/Banner/Items?operation=`+operation)
        .toPromise()
        .then(res => { model = res })
        .catch(err => { model = undefined }
        );
      return model;
    }

    async productRelatedItems(productId:number,operation: string): Promise<any> {
      let model: any;
      await this.http.post(environment.apiURL +`/Product/GetRelatedProducts?flag=`+operation,productId)
        .toPromise()
        .then(res => { model = res })
        .catch(err => { model = undefined }
        );
      return model;
    }
    
    getSanitizedImagePath(base64String)
    {
      let objectURL = 'data:image/png;base64,' + base64String;
      return this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
}