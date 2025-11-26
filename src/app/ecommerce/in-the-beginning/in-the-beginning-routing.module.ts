import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InTheBeginningComponent } from './in-the-beginning.component';

const routes: Routes = [
  {
    path: '',
    component: InTheBeginningComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InTheBeginningRoutingModule { }
