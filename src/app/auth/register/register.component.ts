import { Component } from '@angular/core';
import { IRegisterForm } from 'src/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: IRegisterForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  constructor() {}

  submit() {
    console.log(this.form)
  }
}
