import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { RouterModule } from '@angular/router';
import { EcommerceComponent } from './ecommerce.component';
import { EFooterComponent } from './e-footer/e-footer.component';
import { EHeaderComponent } from './e-header/e-header.component';
import { FormsModule } from '@angular/forms';
import { CartBoxComponent } from './cart-box/cart-box.component';
import { CartBoxModule } from './cart-box/cart-box.module';
import { QuoteCartModule } from './quote-cart/quote-cart.module';

@NgModule({
  declarations: [
    EcommerceComponent,
    EFooterComponent,
    EHeaderComponent

  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    RouterModule,
    FormsModule,
    CartBoxModule,
    QuoteCartModule
  ]
})
export class EcommerceModule { }
