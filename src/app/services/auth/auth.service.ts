import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  userToken: string | null = '';
  user = {} as { email: string; first_name: string; last_name: string };

  constructor(private titleService: Title) {

  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
