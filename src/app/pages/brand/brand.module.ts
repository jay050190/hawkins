import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertComponent, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { BrandRoutingModule } from './brand-routing.module';
import { BrandComponent } from './brand.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    BrandRoutingModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ReactiveFormsModule,
    NbAlertModule
  ],
  declarations: [
    BrandComponent
  ],
})
export class BrandModule { }
