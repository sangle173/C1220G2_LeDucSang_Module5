import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../service/employee/employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Position} from '../../model/employee/position';
import {EducationDegree} from '../../model/employee/education-degree';
import {Department} from '../../model/employee/department';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {DepartmentService} from '../../service/employee/department.service';
import {PositionService} from '../../service/employee/position.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employeeFormDelete: FormGroup;
  id: number;
  positions: Position[];
  educationDegrees: EducationDegree[];
  departments: Department[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private educationDegreeService: EducationDegreeService,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getEmployee(this.id);
      const employee = this.getEmployee(this.id);
    });
  }

  ngOnInit() {
    this.getAllDepartment();
    this.getAllEducationDegree();
    this.getAllPosition();
  }

  getEmployee(id: number) {
    return this.employeeService.findById(id).subscribe(employee => {
      this.employeeFormDelete = new FormGroup({
        name: new FormControl(employee.name),
        birthday: new FormControl(employee.birthday),
        idCard: new FormControl(employee.idCard),
        salary: new FormControl(employee.salary),
        phoneNumber: new FormControl(employee.phoneNumber),
        email: new FormControl(employee.email),
        address: new FormControl(employee.address),
        education: new FormControl(employee.education),
        position: new FormControl(employee.position),
        department: new FormControl(employee.department),
      });
    });
  }


  getAllEducationDegree() {
    this.educationDegreeService.getAll().subscribe(educationDegrees => {
      this.educationDegrees = educationDegrees;
    });
  }

  getAllPosition() {
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
    });
  }

  getAllDepartment() {
    this.departmentService.getAll().subscribe(departments => {
      this.departments = departments;
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id);
    alert("oke")
    this.router.navigate(['/employees/list']);
  }
}
