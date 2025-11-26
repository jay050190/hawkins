import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountRoutingModule, routedComponents } from './discount-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../../../src/app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { DiscountService } from '../../@core/services/discount.service';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    DiscountRoutingModule,
    FormsModule,
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
    NbListModule,
    Ng2SmartTableModule
  ],
  providers: [DiscountService],
})
export class DiscountModule { }
