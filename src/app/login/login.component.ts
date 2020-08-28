import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormControlName } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  email: '';
  password: '';
  result: boolean = false;
  showMsg: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.result = this.loginService.isLogin(this.email, this.password);
    if (this.result === true) {
      this.showMsg = true;
    } else {
      this.showMsg = false;
    }
  }

}
