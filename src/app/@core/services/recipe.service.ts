import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Recipe, RecipeData } from '../data/recipe';
@Injectable()
export class RecipeService extends RecipeData {

    constructor(private http: HttpClient) {
        super();
    }
    getRecipe(req: Recipe): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/RecipeMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }
    dmlRecipe(req: Recipe): Observable<any> {
        return this.http.post(environment.apiURL +`/Master/RecipeMaster`, req)
        .pipe(map(userResponse => {
          return userResponse;
        }));
    }


}