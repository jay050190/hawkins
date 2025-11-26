import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebLoginRoutingModule } from './web-login-routing.module';
import { WebLoginComponent } from './web-login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    WebLoginComponent
  ],
  imports: [
    CommonModule,
    WebLoginRoutingModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class WebLoginModule { }
