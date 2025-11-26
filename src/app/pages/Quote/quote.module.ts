import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteRoutingModule, routedComponents } from './quote-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../forms/forms-routing.module';
import { QuoteService } from '../../@core/services/quote.service';
import { NbCardModule, NbIconModule, NbDialogModule, NbButtonModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  declarations: [
    ...routedComponents,
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbDialogModule,
    NbButtonModule
  ],
  providers: [QuoteService],
})
export class QuoteModule { }
