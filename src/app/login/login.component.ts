import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// Previous
// export class LoginComponent implements OnInit {
//   loginForm;
//   constructor(
//     private formBuilder: FormBuilder,
//   ) { 
//     this.loginForm = this.formBuilder.group({
//       email: '',
//       password: ''
//     });
//   }
  
//   ngOnInit() {
   
//   }
    
//   onSubmit(Data) {
//     // Process checkout data here
//     this.loginForm.reset();
  
//     console.warn('Your form has been submitted',
//      Data);
//   } 
//   }


export class LoginComponent implements OnInit {

  status: boolen;
  message: string;
  loginForm: FormGroup;

  constructor (private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });
  }
    

  onSubmit() {

    this.http.post<any>('https://utilitee.cloudifymedia.com/api/fola/data', this.loginForm.value)
    .subscribe(data => { 
      this.status = data.done;
      this.message = data.message;
    })

  }

}

