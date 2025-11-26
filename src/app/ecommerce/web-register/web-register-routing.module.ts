import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebRegisterComponent } from './web-register.component';

const routes: Routes = [
  {
    path: '',
    component: WebRegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRegisterRoutingModule { }
