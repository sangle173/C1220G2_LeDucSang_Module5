import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Position} from '../../model/employee/position';
import {EducationDegree} from '../../model/employee/education-degree';
import {Department} from '../../model/employee/department';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {EmployeeService} from '../../service/employee/employee.service';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {DepartmentService} from '../../service/employee/department.service';
import {PositionService} from '../../service/employee/position.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  employeeFormEdit: FormGroup;
  id: number;
  positions: Position[];
  educationDegrees: EducationDegree[];
  departments: Department[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private educationDegreeService: EducationDegreeService,
    private departmentService: DepartmentService,
    private positionService: PositionService
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
      this.employeeFormEdit = new FormGroup({
        name: new FormControl(employee.name, [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]+$')]),
        birthday: new FormControl(employee.birthday, [Validators.required]),
        idCard: new FormControl(employee.idCard, [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]+$')]),
        salary: new FormControl(employee.salary, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]),
        phoneNumber: new FormControl(employee.phoneNumber, [Validators.required, Validators.maxLength(15), Validators.minLength(9), Validators.pattern('^[0-9]+$')]),
        email: new FormControl(employee.email, [Validators.email, Validators.required]),
        address: new FormControl(employee.address, [Validators.required, Validators.maxLength(100)]),
        education: new FormControl(employee.education, [Validators.required]),
        position: new FormControl(employee.position, [Validators.required]),
        department: new FormControl(employee.department, [Validators.required]),
      });
    });
    console.log('form' + this.employeeFormEdit.value);
  }

  updateEmployee(id: number) {
    const employee = this.employeeFormEdit.value;
    this.employeeService.updateEmployee(id, employee).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }

  get name() {
    return this.employeeFormEdit.get('name');
  }

  get email() {
    return this.employeeFormEdit.get('email');
  }

  get birthday() {
    return this.employeeFormEdit.get('birthday');
  }

  get salary() {
    return this.employeeFormEdit.get('salary');
  }

  get phoneNumber() {
    return this.employeeFormEdit.get('phoneNumber');
  }

  get idCard() {
    return this.employeeFormEdit.get('idCard');
  }

  get address() {
    return this.employeeFormEdit.get('address');
  }

  get education() {
    return this.employeeFormEdit.get('education');
  }

  get position() {
    return this.employeeFormEdit.get('position');
  }

  get department() {
    return this.employeeFormEdit.get('department');
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
}
