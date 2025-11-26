import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { WidgetModule } from '../widget/widget.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NbTableModule, NbTabsetModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
//import { RedZoomModule } from 'ngx-red-zoom';
@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    ThemeModule,
    CommonModule,
    ProductDetailRoutingModule,
    CarouselModule,
    WidgetModule,
    NbTabsetModule,
    //RedZoomModule
  ]
})
export class ProductDetailModule { }
