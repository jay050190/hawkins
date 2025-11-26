import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesServiceComponent } from './sales-service.component';

const routes: Routes = [
  {
    path: '',
    component: SalesServiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesServiceRoutingModule { }
