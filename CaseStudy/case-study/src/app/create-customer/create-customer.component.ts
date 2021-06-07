import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';

const FILTER_PAG_REGEX = /[^0-9]/g;

const CUSTOMERS: Customer[] = [
  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },
  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },
  {
    name: 'Le Duc Sang',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'sangle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  }
];

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  page = 1;
  pageSize = 6;
  collectionSize = CUSTOMERS.length;
  customer: Customer = {};
  customers: Customer[];
  title: 'Customers Manager';
  dateDemo: '2020-07-09';
  constructor() {
    this.refreshCustomers();
  }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.customers.push(this.customer);
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }

  refreshCustomers() {
    this.customers = CUSTOMERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
