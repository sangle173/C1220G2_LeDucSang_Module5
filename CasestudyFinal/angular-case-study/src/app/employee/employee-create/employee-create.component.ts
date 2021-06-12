import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee/employee.service';
import {Position} from '../../model/employee/position';
import {EducationDegree} from '../../model/employee/education-degree';
import {Department} from '../../model/employee/department';
import {EducationDegreeService} from '../../service/employee/education-degree.service';
import {DepartmentService} from '../../service/employee/department.service';
import {PositionService} from '../../service/employee/position.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-Z ]+$')]),
    birthday: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]+$')]),
    salary: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern('^[0-9]+$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(9), Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.email, Validators.required]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    education: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });
  positions: Position[];
  educationDegrees: EducationDegree[];
  departments: Department[];
  router: Router;
  message: string;

  constructor(private employeeService: EmployeeService,
              private fb: FormBuilder,
              private educationDegreeService: EducationDegreeService,
              private departmentService: DepartmentService,
              private positionService: PositionService
  ) {
  }

  ngOnInit() {
    this.getAllDepartment();
    this.getAllEducationDegree();
    this.getAllPosition();
  }

  onSubmit() {
    const employee = this.employeeForm.value;
    this.employeeService.saveEmployee(employee).subscribe(() => {
      this.employeeForm.reset();
      // this.router.navigate(['/employees/list']);
      this.message = 'successfully';
    }, e => {
      console.log(e);
    });
  }

  get name() {
    return this.employeeForm.get('name');
  }

  get email() {
    return this.employeeForm.get('email');
  }

  get birthday() {
    return this.employeeForm.get('birthday');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }

  get phoneNumber() {
    return this.employeeForm.get('phoneNumber');
  }

  get idCard() {
    return this.employeeForm.get('idCard');
  }

  get address() {
    return this.employeeForm.get('address');
  }

  get education() {
    return this.employeeForm.get('education');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get department() {
    return this.employeeForm.get('department');
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
