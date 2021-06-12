import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeUpdateComponent} from './employee-update/employee-update.component';
import {EmployeeModule} from './employee.module';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';


const routes: Routes = [
  {
    path: 'employees/list',
    component: EmployeeListComponent
  }, {
    path: 'employees/create',
    component: EmployeeCreateComponent
  }, {
    path: 'employees/edit/:id',
    component: EmployeeUpdateComponent
  }, {
    path: 'employees/delete/:id',
    component: EmployeeDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
