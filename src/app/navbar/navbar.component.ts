import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  loading: boolean = true;
  first_name: string = '';
  email: string = '';


  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (token) {

      const headers = { 
        'Authorization': 'bearer ' + token 
      }
  
      this.http.get<any>('https://yescapital.ng/api/user/details', { headers }).subscribe(data => {

        this.first_name = data.profile.first_name;
        this.email = data.profile.email;
        this.loading = false;
      })
    } else {
      this._router.navigate(['']);
    }

  }

  handleClickLogout() {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }

}
