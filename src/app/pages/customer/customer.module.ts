import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    CustomerRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    CustomerComponent
  ],
})
export class CustomerModule { }
