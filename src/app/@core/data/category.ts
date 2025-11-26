import { Observable } from 'rxjs';
export interface Category {
    id?: number;
    name?: string;
    categoryName?: string;
    metaKeywords?: string;
    metaTitle?: string;
    description?: string;
    metaDescription?: string;
    parentCategoryId?: number;
    pictureId?: number;
    showOnHomepage?: boolean;
    published?: boolean;
    deleted?: boolean;
    displayOrder?: number;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    operation?: string;
  }
  
  export abstract class CategoryData {
    abstract getCategory(req:Category): Observable<any>;
    abstract dmlCategory(req:Category): Observable<any>;
  }
  