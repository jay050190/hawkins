import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertComponent, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { AttributeValueRoutingModule } from './attribute-value-routing.module';
import { AttributeValueComponent } from './attribute-value.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorSketchModule } from 'ngx-color/sketch';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    AttributeValueRoutingModule,
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
    NbAlertModule,
    ColorSketchModule
  ],
  declarations: [
    AttributeValueComponent
  ],
})
export class AttributeValueModule { }
