import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { OurMissionRoutingModule } from './our-mission-routing.module';
import { OurMissionComponent } from './our-mission.component';

@NgModule({
  declarations: [
    OurMissionComponent
  ],
  imports: [
    CommonModule,
    OurMissionRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class OurMissionModule { }
