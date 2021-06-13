import { Component, OnInit } from '@angular/core';
import {EducationDegree} from '../../model/employee/education-degree';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {Department} from '../../model/employee/department';
import {DepartmentService} from '../../service/employee/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments;
    });
  }
}
