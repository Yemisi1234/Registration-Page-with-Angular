import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  loading: boolean = false;
  message?: string;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
 
  constructor (private _router: Router, private http: HttpClient) {
   
  }

  ngOnInit() {

  }

  onSubmit() {
    this.loading = true;
    this.http.post<any>('https://yescapital.ng/api/login', this.loginForm.value)
    .subscribe(data => {
        if (data.done === true) {
          localStorage.setItem('token', data.token);
          this._router.navigate(['navbar']);
        } else {
          this.loading = false;
          this.message = data.message;
        }
    })

  }


}