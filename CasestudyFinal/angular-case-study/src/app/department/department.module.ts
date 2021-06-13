import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department/department.component';


@NgModule({
    declarations: [DepartmentComponent],
    exports: [
        DepartmentComponent
    ],
    imports: [
        CommonModule,
        DepartmentRoutingModule
    ]
})
export class DepartmentModule { }
