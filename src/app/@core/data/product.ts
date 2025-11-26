import { Observable } from 'rxjs';
import { SearchFilter } from './search-filter';
export interface Product {
    id?: number;
    name?: string;
    metaKeywords?: string;
    metaTitle?: string;
    metaDescription?: string;
    productCode?: string;
    categoryId?: number;
    brandId?: number;
    brandName?: string;
    gtin?: string;
    requiredProductIds?: string;
    allowedQuantities?: string;
    productTypeId?: number;
    visibleIndividually?: boolean;
    careInstruction?: string;
    fullDescription?: string;
    featureJson?: string;
    boxContentsDesc?: string;
    sixDigitHSNCode?: number;
    guranteeMonth?: number;
    eightDigitHSNCode?: number;
    allowCustomerReviews?: boolean;
    deliveryDateId?: number;
    isTaxExempt?: boolean;
    manageInventoryMethodId?: number;
    stockQuantity?: number;
    displayStockAvailability?: boolean;
    displayStockQuantity?: boolean;
    minStockQuantity?: number;
    notifyAdminForQuantityBelow?: number;
    orderMinimumQuantity?: number;
    orderMaximumQuantity?: number;
    notReturnable?: boolean;
    disableBuyButton?: boolean;
    disableWishlistButton?: boolean;
    salePrice?: number;
    mrp?: number;
    markAsNew?: boolean;
    markAsNewStartDateTimeUtc?: string;
    markAsNewEndDateTimeUtc?: string;
    weightInKg?: number;
    lengthInCm?: number;
    widthInCm?: number;
    heightInCm?: number;
    cartonWeightInKg?: number;
    cartonLengthInCm?: number;
    cartonWidthInCm?: number;
    cartonHeightInCm?: number;
    baseThicknessInMM?: number;
    casePack?: number;
    createdOnUtc?: string;
    updatedOnUtc?: string;
    availableStartDateTimeUtc?: string;
    availableEndDateTimeUtc?: string;
    published?: boolean;
    deleted?: boolean;
    displayOrder?: number;
    specification?:string;
  }
  
  
  export abstract class ProductData {
    abstract getAllProduct(productid:number): Promise<any>;
    abstract addProduct(req:Product): Observable<any>;
    abstract updateProduct(req:Product): Observable<any>;
    abstract getProductImages(productId:number,file:any): Observable<any>;
    abstract addProductImages(req:Product): Observable<any>;
    abstract addImages(any,alt:string,title:string): Promise<any>;
    abstract addProductImagesMapping(req:[]): Observable<any>;
    abstract addRecipe(req:any): Observable<any>;
    abstract addRecipeAttributes(req:any): Observable<any>;
    abstract getBulkUploadTemplate(); 
    abstract uploadProduct(file: any): Observable<any>;
    abstract listProduct(srch:SearchFilter): Promise<any>;
    abstract listProductSearch(srch:SearchFilter): Promise<any>;
    abstract productListAutoComplete(srch:SearchFilter): Promise<any>;
    abstract getFilterOption(operation:string, values:string): Promise<any>;
    abstract getMediaGallery(pageIndex:number,pageSize:number): Promise<any>;
    abstract updateCategoryImagesMapping(catId:number,imgId:number): Promise<any>;
    
  }
  