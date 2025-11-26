import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestWorldComponent } from './rest-world.component';


const routes: Routes = [
  {
    path: '',
    component: RestWorldComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestWorldRoutingModule { }
