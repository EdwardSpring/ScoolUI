import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    url = "http://localhost:8080/Quiz/Login";
    result!: boolean;
    isLoggedIn = false;

    constructor(private http: HttpClient, private router: Router) { }

    login(email: string, password: string): any {
        const user = { email: email, password: password }
        email == "ed" && password == "pass" ? this.result = true : this.result = false;
        email == "ed" && password == "pass" ? this.isLoggedIn = true : this.result = false;

        return this.result;
    }
}