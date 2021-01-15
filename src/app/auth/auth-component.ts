import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-component.html',
  styleUrls: ['./auth-component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
