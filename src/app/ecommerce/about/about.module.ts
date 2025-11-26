import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { WidgetModule } from '../widget/widget.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutRoutingModule } from './about-routing.module';
@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class AboutModule { }
