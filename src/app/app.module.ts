<<<<<<< HEAD
// import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
=======
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

>>>>>>> 4c0b009fb0a2ec1a1148a128541ec4708e83da2a
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
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 4c0b009fb0a2ec1a1148a128541ec4708e83da2a




@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
<<<<<<< HEAD
    NavbarComponent,
=======
    HomeComponent,
>>>>>>> 4c0b009fb0a2ec1a1148a128541ec4708e83da2a
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
<<<<<<< HEAD
export class AppModule {}
//  platformBrowserDynamic().bootstrapModule(AppModule); 
=======
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);  
>>>>>>> 4c0b009fb0a2ec1a1148a128541ec4708e83da2a
