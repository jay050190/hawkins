import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { ShareholderOfferRoutingModule } from './shareholer-offer-routing.module';
import { ShareholderOfferComponent } from './shareholder-offer.component';

@NgModule({
  declarations: [
    ShareholderOfferComponent
  ],
  imports: [
    CommonModule,
    ShareholderOfferRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class ShareholderOfferModule { }
