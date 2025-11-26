import { Observable } from 'rxjs';
export interface BannerEntity {
    title?: string;
    template?: string;
    item?:any;
    bannerItem?:any;
  }

  export interface BannerItem {
    id?: string;
    name?: string;
    img?:any;
  }
  
  export abstract class BannerData {
    abstract items(req:string): Promise<any>;
    abstract productRelatedItems(productId:number,req:string): Promise<any>;
    abstract getSanitizedImagePath(base64String:string);
  }
  