import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { Experts2009RoutingModule } from './experts2009-routing.module';
import { Experts2009Component } from './experts2009.component';

@NgModule({
  declarations: [
    Experts2009Component
  ],
  imports: [
    CommonModule,
    Experts2009RoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class Experts2009Module { }
