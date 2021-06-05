import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  contract: Contract = {};
  contracts: Contract[] = [
    {
      employee: {
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
      customer: {
        name: 'Le Duc Sang',
        birthday: '09-09-1992',
        phoneNumber: '0909090909',
        email: 'sangle@gmail.com',
        address: 'Da Nang',
        customerType: 'Diamond'
      },
      service: {
        name: 'Villa 9.1',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },
      dateStarted: '19-09-2020',
      dateEnd: '19-10-2020',
      downPayment: 1000,
      totalPayment: 2000
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewContract() {
    this.contracts.push(this.contract);
  }
}
