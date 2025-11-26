import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { AnnualReportsRoutingModule } from './annual-reports-routing.module';
import { AnnualReportsComponent } from './annual-reports.component';

@NgModule({
  declarations: [
    AnnualReportsComponent
  ],
  imports: [
    CommonModule,
    AnnualReportsRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class AnnualReportsModule { }
