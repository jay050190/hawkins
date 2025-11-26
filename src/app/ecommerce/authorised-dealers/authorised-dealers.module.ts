import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import {AuthorisedDealersRoutingModule } from './authorised-dealers-routing.module';
import { AuthorisedDealersComponent } from './authorised-dealers.component';

@NgModule({
  declarations: [
    AuthorisedDealersComponent
  ],
  imports: [
    CommonModule,
    AuthorisedDealersRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class AuthorisedDealersModule { }
