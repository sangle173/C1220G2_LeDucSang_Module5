import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee/employee';
import {EmployeeService} from '../../service/employee/employee.service';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  page = 1;
  pageSize = 6;
  collectionSize: number;
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService,
  ) {
  }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
      this.collectionSize = this.employees.length;
    });
  }

}
