import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import {CustomvalidationService} from '../service/CustomvalidationService';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User[] = [
    {
      username: 'dongtran',
      email: 'dongtran@gmail.com',
      password: '123456',
      country: 'Viet Nam',
      age: 19,
      gender: 'male',
      phone: '0909888888'
    },

    {
      username: 'hauguyen',
      email: 'hau@gmail.com',
      password: '123456',
      country: 'Viet Nam',
      age: 19,
      gender: 'male',
      phone: '0909888888'
    },

    {
      username: 'congguyen',
      email: 'cong@gmail.com',
      password: '123456',
      country: 'Viet Nam',
      age: 19,
      gender: 'male',
      phone: '0909888888'
    },

    {
      username: 'khanguyen',
      email: 'kha@gmail.com',
      password: '123456',
      country: 'Viet Nam',
      age: 19,
      gender: 'male',
      phone: '0909888888'
    },
  ];

  // @ts-ignore
  registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.customValidator.patternValidator]),
      confirmPassword: new FormControl(),
      country: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    },
    {
      validators: this.customValidator.MatchPassword('password', 'confirmPassword')
    }
  );

  countryList = [
    {id: 1, name: 'Viet Name'},
    {id: 2, name: 'Japan'},
    {id: 3, name: 'England'},
    {id: 4, name: 'UAE'},
    {id: 5, name: 'Korea'},
    {id: 6, name: 'USa'},
    {id: 7, name: 'China'},
    {id: 8, name: 'Brasil'},
  ];

  constructor(private customValidator: CustomvalidationService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.users.push(this.registerForm.value);
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }


  reset() {
    this.registerForm.reset();
  }
}
