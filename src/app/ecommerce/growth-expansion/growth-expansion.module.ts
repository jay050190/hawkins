import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { GrowthExpansionRoutingModule } from './growth-expansion-routing.module';
import { GrowthExpansionComponent } from './growth-expansion.component';

@NgModule({
  declarations: [
    GrowthExpansionComponent
  ],
  imports: [
    CommonModule,
    GrowthExpansionRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class GrowthExpansionModule { }
