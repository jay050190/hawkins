import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegistrationComponent } from './product-registration.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { ProductRegistrationRoutingModule } from './product-registration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ProductRegistrationComponent
  ],
  imports: [
    CommonModule,
    ProductRegistrationRoutingModule,
    CarouselModule,
    WidgetModule,
    ReactiveFormsModule,
    WidgetModule,
    NgbDatepickerModule
  ]
})
export class ProductRegistrationModule { }
