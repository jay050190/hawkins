import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BrandEntity, BrandData } from '../data/brand-entity';
import { map } from 'rxjs/operators';
import { Product, ProductData } from '../data/product';
import { SearchFilter } from '../data/search-filter';
@Injectable()
export class ProductService extends ProductData {

  async getAllProduct(productid:number): Promise<any> {
        let model:any;
        await this.http.post(environment.apiURL +`/Product/GetProducts`,productid)
        .toPromise()
        .then(res => { model = res })
        .catch(err => { model = undefined });
        return model;
    }
    addProduct(req: Product): Observable<any> {
        return this.http.post(environment.apiURL +`/Product/AddProduct`,req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    updateProduct(req: Product): Observable<any> {
        return this.http.post(environment.apiURL +`/Product/AddProduct`,req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    getProductImages(productId: number, file: any): Observable<any> {
        throw new Error('Method not implemented.');
    }
    addProductImages(req: Product): Observable<any> {
        throw new Error('Method not implemented.');
    }

    async addImages(file: any,alt:string,title:string): Promise<any> {
        const formData: FormData = new FormData();
        formData.append('formFile', file, file.name);
        let model: any;
        await this.http.post(environment.apiURL + `/Product/InsertPicture?Alt=`+alt+`&Title=`+title, formData)
          .toPromise()
          .then(res => { model = res })
          .catch(err => { model = undefined }
          );
        return model;
    }
    
    addProductImagesMapping(req: []): Observable<any> {
        return this.http.post(environment.apiURL +`/Product/InsertProductPictureMapping`,req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }


    addRecipe(req: Product): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/RecipeMaster`,req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    addRecipeAttributes(req: any): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/RecipeAttributeMaster`,req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }

    getBulkUploadTemplate(){
      //let headers = new HttpHeaders().append("Authorization", "Bearer " + token)
        return this.http.get(environment.apiURL +`/Product/DownloadBulkUploadTemplate`, {responseType: 'arraybuffer'});

      //return this.http.get(environment.apiURL +`/Product/DownloadBulkUploadTemplate`)
      //.pipe(map(userResponse => {
       // return userResponse;
    //  }));
    }

    uploadProduct(file: any): Observable<any> {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
         
      return this.http.post(environment.apiURL + `/Product/BulkUpload`, formData)
          .pipe(map(res => {
          return res;
      }));
        
  }
  async listProduct(req:SearchFilter): Promise<any>
  {
    let model: any;
    await this.http.post(environment.apiURL +`/Product/ListProduct`,req) .toPromise()
    .then(res => { model = res })
    .catch(err => { model = undefined }
    );
    return model;
  }

  async listProductSearch(req:SearchFilter): Promise<any>
  {
    let model: any;
    await this.http.post(environment.apiURL +`/Product/ProductListBySearch`,req) .toPromise()
    .then(res => { model = res })
    .catch(err => { model = undefined }
    );
    return model;
  }
  async productListAutoComplete(req:SearchFilter): Promise<any>
  {
    let model: any;
    await this.http.post(environment.apiURL +`/Product/ProductListAutoComplete`,req) .toPromise()
    .then(res => { model = res })
    .catch(err => { model = undefined }
    );
    return model;
  }

  

  async getFilterOption(operation:string, values:string): Promise<any> {
    let model: any;
    await this.http.get(environment.apiURL +`/Product/GetFiltersOption?operation=`+operation+`&values=`+values)
      .toPromise()
      .then(res => { model = res })
      .catch(err => { model = undefined }
      );
    return model;
  }

  async getMediaGallery(pageIndex:number,pageSize:number): Promise<any> {
    let model: any;
    await this.http.get(environment.apiURL +`/Product/GetMediaGallery?pIndex=`+pageIndex+`&pSize=`+pageSize)
      .toPromise()
      .then(res => { model = res })
      .catch(err => { model = undefined }
      );
    return model;
  }

  async updateCategoryImagesMapping(catId:number,imgId:number): Promise<any> 
  {
  let model: any;
  await this.http.get(environment.apiURL +`/Product/UpdateCategoryPictureMapping?catId=`+catId+`&imgId=`+imgId)
    .toPromise()
    .then(res => { model = res })
    .catch(err => { model = undefined }
    );
  return model;
  }
    //return this.http.get(environment.apiURL +`/Product/DownloadBulkUploadTemplate`)
    //.pipe(map(userResponse => {
     // return userResponse;
  //  }));
  

   
    constructor(private http: HttpClient) {
        super();
    }
}