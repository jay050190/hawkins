import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestWorldComponent } from './rest-world.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { RestWorldRoutingModule } from './rest-world-routing.module';

@NgModule({
  declarations: [
    RestWorldComponent
  ],
  imports: [
    CommonModule,
    RestWorldRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class RestWorldModule { }
