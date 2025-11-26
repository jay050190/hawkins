import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { OtherInformationRoutingModule } from './other-information-routing.module';
import { OtherInformationComponent } from './other-information.component';

@NgModule({
  declarations: [
    OtherInformationComponent
  ],
  imports: [
    CommonModule,
    OtherInformationRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class OtherInformationModule { }
