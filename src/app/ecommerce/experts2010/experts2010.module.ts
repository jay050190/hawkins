import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { Experts2010RoutingModule } from './experts2010-routing.module';
import { Experts2010Component } from './experts2010.component';

@NgModule({
  declarations: [
    Experts2010Component
  ],
  imports: [
    CommonModule,
    Experts2010RoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class Experts2010Module { }
