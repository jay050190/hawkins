import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { ShareholdingInformationRoutingModule } from './shareholding-information-routing.module';
import { ShareholdingInformationComponent } from './shareholding-information.component';

@NgModule({
  declarations: [
    ShareholdingInformationComponent
  ],
  imports: [
    CommonModule,
    ShareholdingInformationRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class ShareholdingInformationModule { }
