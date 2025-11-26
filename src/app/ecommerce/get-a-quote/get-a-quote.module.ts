import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAQuoteComponent } from './get-a-quote.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { GetAQuoteRoutingModule } from './get-a-quote-routing.module';

@NgModule({
  declarations: [
    GetAQuoteComponent
  ],
  imports: [
    CommonModule,
    GetAQuoteRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class GetAQuoteModule { }
