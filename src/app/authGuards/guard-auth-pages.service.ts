import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './app/authentication/login/login.service';

@Injectable({ providedIn: 'root' })
export class GuardAuthPages {
    constructor(private loginService: LoginService, private router: Router) { }
    status = false

    canActivate() {
        console.log(this.loginService.isLoggedIn);

        if (!this.loginService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/']);
        return true;
    }
}