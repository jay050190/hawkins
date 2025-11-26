import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesServiceComponent } from './sales-service.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { SalesServiceRoutingModule } from './sales-service-routing.module';

@NgModule({
  declarations: [
    SalesServiceComponent
  ],
  imports: [
    CommonModule,
    SalesServiceRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class SalesServiceModule { }
