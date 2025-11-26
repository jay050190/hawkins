import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressRoutingModule } from './customer-address-routing.module';
import { CustomerAddressComponent } from './customer-address.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WidgetModule } from '../widget/widget.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutComponent, NbListComponent, NbListModule, NbRadioModule, NbSelectModule, NbSidebarComponent, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../../pages/forms/forms-routing.module';
@NgModule({
  declarations: [
    CustomerAddressComponent
  ],
  imports: [
    CommonModule,
    CustomerAddressRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbListModule,
    WidgetModule
  ]
})
export class CustomerAddressModule { }
