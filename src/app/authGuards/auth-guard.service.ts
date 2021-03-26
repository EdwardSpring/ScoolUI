import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './authentication/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardPrivatePages {
  status = false;

  constructor(private loginService: LoginService, private router: Router) {

  }

  canActivate() {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
