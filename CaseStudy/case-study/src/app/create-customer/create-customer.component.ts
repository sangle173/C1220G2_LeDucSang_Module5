import {Component, OnInit} from '@angular/core';
import {Employee} from '../employee';
import {Customer} from '../customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = {};
  customers: Customer[] = [
    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },
    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },

    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    },
    {
      name: 'Le Duc Sang',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'sangle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.customers.push(this.customer);
  }
}
