import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.auth.userToken = localStorage.getItem('token');
    this.auth.isLoggedIn = this.auth.userToken != null;
  }

  ngOnInit(): void {
  }

}
