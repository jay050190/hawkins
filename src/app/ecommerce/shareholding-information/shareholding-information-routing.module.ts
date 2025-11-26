import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareholdingInformationComponent } from './shareholding-information.component';

const routes: Routes = [
  {
    path: '',
    component: ShareholdingInformationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholdingInformationRoutingModule { }
