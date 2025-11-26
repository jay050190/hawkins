import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { InTheBeginningRoutingModule } from './in-the-beginning-routing.module';
import { InTheBeginningComponent } from './in-the-beginning.component';

@NgModule({
  declarations: [
    InTheBeginningComponent
  ],
  imports: [
    CommonModule,
    InTheBeginningRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class InTheBeginningModule { }
