import { Component, OnInit } from '@angular/core';
import { LoginRequest, SignupRequest } from './model';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginModel:LoginRequest;
  singupModel:SignupRequest;
  constructor() { 
    this.loginModel = new LoginRequest();
    this.singupModel = new SignupRequest();
  }

  ngOnInit(): void {
  }
  onLoginSubmit(){
alert("Login");
  }
  onSignupSubmit(){
    alert("Signup");
  }

}
