import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCartRoutingModule } from './my-cart-routing.module';
import { MyCartComponent } from './my-cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    MyCartComponent
  ],
  imports: [
    CommonModule,
    MyCartRoutingModule,
    CarouselModule
  ]
})
export class MyCartModule { }
