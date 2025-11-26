import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPartComponent } from './product-part.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { ProductPartRoutingModule } from './product-part-routing.module';

@NgModule({
  declarations: [
    ProductPartComponent
  ],
  imports: [
    CommonModule,
    ProductPartRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class ProductPartModule { }
