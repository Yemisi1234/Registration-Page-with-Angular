import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth-component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {NgModule} from '@angular/core';
import {ResetComponent} from './reset/reset.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignupComponent
      },
      {
        path: 'reset-password',
        component: ResetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
