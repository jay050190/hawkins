import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRegisterRoutingModule } from './web-register-routing.module';
import { WebRegisterComponent } from './web-register.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    WebRegisterComponent
  ],
  imports: [
    CommonModule,
    WebRegisterRoutingModule,
    CarouselModule,
    ReactiveFormsModule
  ]
})
export class WebRegisterModule { }
