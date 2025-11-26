import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { VigilMechanismRoutingModule } from './vigil-mechanism-routing.module';
import { VigilMechanismComponent } from './vigil-mechanism.component';

@NgModule({
  declarations: [
    VigilMechanismComponent
  ],
  imports: [
    CommonModule,
    VigilMechanismRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class VigilMechanismModule { }
