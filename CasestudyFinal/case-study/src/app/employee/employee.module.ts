import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {UpdateComponent} from './update/update.component';
import {DeleteComponent} from './delete/delete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { SearchEmployeePipe } from './search-employee.pipe';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [CreateComponent, ListComponent, UpdateComponent, DeleteComponent, SearchEmployeePipe],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    FormsModule,
    HttpClientModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule {
}
