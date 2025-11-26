import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteCartComponent } from './quote-cart.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { QuoteCartRoutingModule } from './quote-cart-routing.module';
@NgModule({
  declarations: [
    QuoteCartComponent
  ],
  imports: [
    CommonModule,
    QuoteCartRoutingModule,
    CarouselModule
  ],
  exports: [
    QuoteCartComponent
  ]

})
export class QuoteCartModule { }
