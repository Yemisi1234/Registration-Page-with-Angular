import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  message?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  email?: string;
  password?: string;

  signupForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor (private _router: Router, private http: HttpClient) {
   
  }

  ngOnInit() {
  }

  onSubmit() {
    // console.log(this.signupForm.value)

    this.message = '';
    this.http.post<any>('https://yescapital.ng/api/user/register', this.signupForm.value)
    .subscribe(data => { 
         if(data.done === true) {
          localStorage.setItem('token', data.token);
          this._router.navigate(['navbar']);
         } else {
         
          this.message = data.message;
         }
    })
  }
}
