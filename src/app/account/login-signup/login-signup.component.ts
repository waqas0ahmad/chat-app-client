import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { LoginRequest, SignupRequest } from './model';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  loginModel: LoginRequest;
  singupModel: SignupRequest;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private accountSrv:AccountService,private _snackBar: MatSnackBar,private router:Router) {
    this.loginModel = new LoginRequest();
    this.singupModel = new SignupRequest();
  }

  ngOnInit(): void {
  }
  onLoginSubmit() {
    this.accountSrv.login(this.loginModel).subscribe(x=>{
      this._snackBar.open(x.Message??"", 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration:5000
      });
      if(x.Status==200){
        localStorage.setItem("user",JSON.stringify(x.Data));
        this.router.navigate(['/main']);
      }
    })
  }
  onSignupSubmit() {
    this.accountSrv.signup(this.singupModel).subscribe(x=>{
      this._snackBar.open(x.Message??"", 'Ok', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration:5000
      });
      if(x.Status==200){
        localStorage.setItem("user",JSON.stringify(x.Data));
        this.router.navigate(['/main']);
      }
    })
  }

}
