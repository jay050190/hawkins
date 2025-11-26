import { NgModule } from '@angular/core';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbLayoutComponent, NbListComponent, NbListModule, NbRadioModule, NbSelectModule, NbSidebarComponent, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { ProductRoutingModule ,routedComponents} from './product-routing.module';
import { FormsModule as ngFormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ImgThumbnail } from './list-product/img-thumbnail';
@NgModule({
  entryComponents: [ImgThumbnail],
  declarations: [
    ...routedComponents,
  ],
  imports: [
    ProductRoutingModule,
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
    ngFormsModule,
    NbListModule,
    Ng2SmartTableModule,
    ReactiveFormsModule
]})
export class ProductModule { }
