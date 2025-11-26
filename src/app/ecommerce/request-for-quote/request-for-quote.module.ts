import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestForQuoteComponent } from './request-for-quote.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { RequestForQuoteRoutingModule } from './request-for-quote-routing.module';

@NgModule({
  declarations: [
    RequestForQuoteComponent
  ],
  imports: [
    CommonModule,
    RequestForQuoteRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class RequestForQuoteModule { }
