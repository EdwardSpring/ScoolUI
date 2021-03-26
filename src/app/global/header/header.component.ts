import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/authentication/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoUrl = "../../assets/logos/logo.png";
  onLoginPage = false;
  onDashboard = false;
  isLoggedIn: any;
  onAdminStudent = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn;
    this.router.url == "/login" ? this.onLoginPage = true : this.onLoginPage = false;
    this.router.url.includes('dashboard') ? this.onDashboard = true : this.onDashboard = false;
    this.router.url.includes('admin/students') ? this.onAdminStudent = true : this.onAdminStudent = false;

    // console.log(this.router.url);
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
