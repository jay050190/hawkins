import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RecipeDetailsRoutingModule } from './recipe-details-routing.module';
import { WidgetModule } from '../widget/widget.module';
@NgModule({
  declarations: [
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RecipeDetailsRoutingModule,
    CarouselModule,
    WidgetModule,
  ],
  exports: [
    RecipeDetailsComponent
  ]

})
export class RecipeDetailsModule { }
