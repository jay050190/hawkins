import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEnquiryComponent } from './send-enquiry.component';

const routes: Routes = [
  {
    path: '',
    component: SendEnquiryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendEnquiryRoutingModule { }
