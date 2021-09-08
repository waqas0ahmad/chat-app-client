import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLayoutComponent } from './account-layout.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AccountRoutingModule } from './account-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { AccountService } from './account.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AccountLayoutComponent,
    LoginSignupComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers:[ApiService,AccountService]
})
export class AccountModule { }
