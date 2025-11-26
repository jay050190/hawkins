import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurMissionComponent } from './our-mission.component';

const routes: Routes = [
  {
    path: '',
    component: OurMissionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurMissionRoutingModule { }
