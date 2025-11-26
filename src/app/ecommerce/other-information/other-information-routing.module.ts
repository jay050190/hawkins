import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherInformationComponent } from './other-information.component';

const routes: Routes = [
  {
    path: '',
    component: OtherInformationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherInformationRoutingModule { }
