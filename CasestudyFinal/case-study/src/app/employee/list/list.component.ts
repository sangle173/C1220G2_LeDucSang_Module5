import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: Employee[] = [];
  idEdit: number;
  employee: Employee;
  nameEdit: string;
  nameSearch: string;
  emailSearch: string;
  addressSearch: string;
  key = 'id';
  reverse = false;
  page = 1;

  constructor(private employeeService: EmployeeService,
  ) {
  }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.employeeService.getAll().subscribe(employees => {
      this.employees = employees;
    });
  }

  sendIdToComponent(id: number) {
    this.idEdit = id;
    this.employeeService.findById(id).subscribe(data => {
      this.employee = data;
      this.nameEdit = this.employee.name;
    });
  }

  deleteemployee() {
    const c = this.employeeService.deleteEmployee(this.idEdit).subscribe(() => {
      this.getAll();
    }, e => {
      console.log(e);
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
