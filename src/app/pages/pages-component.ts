import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages-component.html',
  styleUrls: ['./pages-component.css']
})
export class PagesComponent implements OnInit, OnDestroy {

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // remove the the body classes
  }

}
