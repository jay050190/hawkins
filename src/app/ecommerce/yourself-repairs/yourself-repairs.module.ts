import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourselfRepairsComponent } from './yourself-repairs.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import {YourselfRepairsRoutingModule } from './yourself-repairs-routing.module';

@NgModule({
  declarations: [
    YourselfRepairsComponent
  ],
  imports: [
    CommonModule,
    YourselfRepairsRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class YourselfRepairsModule { }
