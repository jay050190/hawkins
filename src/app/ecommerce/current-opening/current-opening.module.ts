import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentOpeningComponent } from './current-opening.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { CurrentOpeningRoutingModule } from './current-opening-routing.module';

@NgModule({
  declarations: [
    CurrentOpeningComponent
  ],
  imports: [
    CommonModule,
    CurrentOpeningRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class CurrentOpeningModule { }
