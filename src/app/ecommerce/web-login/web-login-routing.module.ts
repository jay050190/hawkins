import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLoginComponent } from './web-login.component';

const routes: Routes = [
  {
    path: '',
    component: WebLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebLoginRoutingModule { }
