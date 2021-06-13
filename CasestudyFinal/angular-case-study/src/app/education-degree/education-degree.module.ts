import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationDegreeRoutingModule } from './education-degree-routing.module';
import { EducationDegreeComponent } from './education-degree/education-degree.component';


@NgModule({
  declarations: [EducationDegreeComponent],
  exports: [
    EducationDegreeComponent
  ],
  imports: [
    CommonModule,
    EducationDegreeRoutingModule
  ]
})
export class EducationDegreeModule { }
