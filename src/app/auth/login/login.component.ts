import { Component } from '@angular/core';
import { ILoginForm } from 'src/types/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: ILoginForm = {
    email: '',
    password: ''
  }

  constructor() {}

  submit() {
    console.log(this.form)
  }
}
