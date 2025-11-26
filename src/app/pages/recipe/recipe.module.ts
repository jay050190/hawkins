import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertComponent, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { routedComponents,RecipeRoutingModule } from './recipe-routing.module';
import { NgxTinymceModule } from 'ngx-tinymce';

@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    RecipeRoutingModule,
    ThemeModule,
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
    Ng2SmartTableModule,
    ReactiveFormsModule,
    NgxTinymceModule.forRoot({
      baseURL: './assets/tinymce/'
    })
    
  ]
})
export class RecipeModule { }
