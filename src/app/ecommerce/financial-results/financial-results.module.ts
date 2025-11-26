import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { FinancialResultsRoutingModule } from './financial-results-routing.module';
import { FinancialResultsComponent } from './financial-results.component';

@NgModule({
  declarations: [
    FinancialResultsComponent
  ],
  imports: [
    CommonModule,
    FinancialResultsRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class FinancialResultsModule { }
