import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentOpeningComponent } from './current-opening.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentOpeningComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentOpeningRoutingModule { }
