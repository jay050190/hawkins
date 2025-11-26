import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilMechanismComponent } from './vigil-mechanism.component';

const routes: Routes = [
  {
    path: '',
    component: VigilMechanismComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VigilMechanismRoutingModule { }
