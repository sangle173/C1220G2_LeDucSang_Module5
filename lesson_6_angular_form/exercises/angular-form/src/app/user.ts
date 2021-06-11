import { Injectable } from '@angular/core';

@Injectable()
export class User {
  userId: string;
  email: string;
  name: string;
  password: string;
  country: string;
  age: number;
  gender: string;
  phone: string;
}
