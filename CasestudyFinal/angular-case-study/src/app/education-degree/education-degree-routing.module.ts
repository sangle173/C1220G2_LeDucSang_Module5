import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PositionComponent} from '../position/position/position.component';
import {EducationDegreeComponent} from './education-degree/education-degree.component';


const routes: Routes = [
  {
    path: 'education-degrees/list',
    component: EducationDegreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationDegreeRoutingModule { }
