import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  service: Service = {};

  services: Service[] = [
    {
      name: 'Villa 9.1',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.2',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.3',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.4',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.5',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },
    {
      name: 'Villa 9.6',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.7',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },

    {
      name: 'Villa 9.8',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewService() {
    this.services.push(this.service);
  }
}
