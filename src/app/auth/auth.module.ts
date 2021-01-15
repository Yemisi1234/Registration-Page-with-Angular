import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth-component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';
import {ResetComponent} from './reset/reset.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
