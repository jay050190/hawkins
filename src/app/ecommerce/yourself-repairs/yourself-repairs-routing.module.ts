import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourselfRepairsComponent } from './yourself-repairs.component';


const routes: Routes = [
  {
    path: '',
    component: YourselfRepairsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourselfRepairsRoutingModule { }
