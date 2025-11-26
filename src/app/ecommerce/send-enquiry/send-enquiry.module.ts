import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendEnquiryComponent } from './send-enquiry.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { SendEnquiryRoutingModule } from './send-enquiry-routing.module';
@NgModule({
  declarations: [
    SendEnquiryComponent
  ],
  imports: [
    CommonModule,
    SendEnquiryRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class SendEnquiryModule { }
