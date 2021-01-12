// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule,} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { ResetComponent } from './reset/reset.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    NavbarComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '',component: AppComponent},
      { path: 'signup', component: SignupComponent},
      { path: 'reset', component: ResetComponent},
      { path: 'navbar', component: NavbarComponent},
    ]), 
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
//  platformBrowserDynamic().bootstrapModule(AppModule); 
