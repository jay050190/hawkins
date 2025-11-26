import { NgModule } from '@angular/core';
import { NbActionsModule, NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../../ecommerce/widget/widget.module';
@NgModule({
  imports: [
      ThemeModule,
    NbCardModule,
    NbButtonModule,
    CategoryRoutingModule,
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
    WidgetModule
  ],
  declarations: [
    CategoryComponent
  ],
})
export class CategoryModule { }
