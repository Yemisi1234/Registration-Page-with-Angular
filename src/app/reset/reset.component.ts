import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})

export class ResetComponent{
  resetForm = new FormGroup({
    email: new FormControl('')
  });

  constructor (private http: HttpClient) {
   
  }

  onSubmit() {
    //
  }

}
