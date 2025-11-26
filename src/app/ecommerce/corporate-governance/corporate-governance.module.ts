import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { CorporateGovernanceRoutingModule } from './corporate-governance-routing.module';
import { CorporateGovernanceComponent } from './corporate-governance.component';

@NgModule({
  declarations: [
    CorporateGovernanceComponent
  ],
  imports: [
    CommonModule,
    CorporateGovernanceRoutingModule,
    CarouselModule,
    WidgetModule
  ]
})
export class CorporateGovernanceModule { }
