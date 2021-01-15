import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

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


  constructor(private router: Router, private http: HttpClient, private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.setTitle('Login');
  }

  onSubmit() {
    this.loading = true;
    this.http.post<any>('https://yescapital.ng/api/login', this.loginForm.value)
      .subscribe(data => {
        console.log('login data ', data);
        if (data.done) {
          localStorage.setItem('token', data.token);
          this.auth.isLoggedIn = true;
          this.router.navigate(['/home']);
        } else {
          this.loading = false;
          this.auth.isLoggedIn = false;
          this.message = data.message;
        }
      });

  }


}
