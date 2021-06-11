import {Injectable} from '@angular/core';

@Injectable()
export class User {
  userId: string;
  email: string;
  name: string;
  passwords: Password;
  country: string;
  age: number;
  gender: string;
  phone: string;
}

export class Password {
  password: string;
  passwordConfirmation: string;
}
