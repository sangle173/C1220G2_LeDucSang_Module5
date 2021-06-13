import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  page = 1;
  pageSize = 6;
  collectionSize: number;
  employees: Employee[] = [];
  idEdit: number;
  employee: Employee;
  nameEdit: string;

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
}
