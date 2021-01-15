import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  loading = true;

  constructor(private router: Router, private http: HttpClient, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.setTitle('Homepage');
    const token = this.auth.userToken;

    if (token) {
      const headers = {
        Authorization: 'bearer ' + token
      };
      this.http.get<any>('https://yescapital.ng/api/user/details', {headers}).subscribe(data => {
        console.log('user data ', data);
        this.auth.user = data.profile;
        this.loading = false;
      });
    }
  }

  handleClickLogout() {
    this.auth.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
