import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})


export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {};
  employees: Employee[] = [
    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    },
    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      idCard: '20000000',
      salary: 1000,
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      education: 'A',
      position: 'Supervisor',
      department: 'Kitchen'
    }

  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewEmployee() {
    this.employees.push(this.employee);
  }
}
