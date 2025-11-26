import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListingComponent } from './recipe-listing.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecipeListingRoutingModule } from './recipe-list-routing.module';
@NgModule({
  declarations: [
    RecipeListingComponent
  ],
  imports: [
    CommonModule,
    RecipeListingRoutingModule,
    CarouselModule
  ],
  exports: [
    RecipeListingComponent
  ]

})
export class RecipeListingModule { }
