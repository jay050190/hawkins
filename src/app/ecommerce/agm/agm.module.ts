import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { AGMRoutingModule } from './agm-routing.module';
import { AGMComponent } from './agm.component';

@NgModule({
  declarations: [
    AGMComponent
  ],
  imports: [
    CommonModule,
    AGMRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class AGMModule { }
