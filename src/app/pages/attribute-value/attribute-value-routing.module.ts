import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttributeValueComponent } from './attribute-value.component';

const routes: Routes = [
  {
    path: '',
    component: AttributeValueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttributeValueRoutingModule {
}
