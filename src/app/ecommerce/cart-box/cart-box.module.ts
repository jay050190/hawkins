import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartBoxComponent } from './cart-box.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartBoxRoutingModule } from './cart-box-routing.module';
@NgModule({
  declarations: [
    CartBoxComponent
  ],
  imports: [
    CommonModule,
    CartBoxRoutingModule,
    CarouselModule
  ],
  exports: [
    CartBoxComponent
  ]

})
export class CartBoxModule { }
