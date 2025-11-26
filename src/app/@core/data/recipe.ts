import { Observable } from 'rxjs';
export interface Recipe {
    id?: number;
    title?: string;
    subtitle?: string;
    cookingTime?:string;
    yield?:string;
    ingredientsJson?: string;
    description?: string;
    pictureId?: number;
    deleted?:boolean;
    createdBy?: string;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    operation?: string;
  }
  
  export abstract class RecipeData {
    abstract getRecipe(req:Recipe): Observable<any>;
    abstract dmlRecipe(req:Recipe): Observable<any>;
  }
  