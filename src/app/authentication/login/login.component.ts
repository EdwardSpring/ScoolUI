import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  form: FormGroup;
  email: any;
  password: any;
  result: any;

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.email = this.form.controls['email'].value;
    this.password = this.form.controls['password'].value;

    this.submitted = true;
    this.result = this.loginService.login(this.email, this.password);

    this.result ? this.router.navigate(['staff/1/dashboard']) : '';

    // alert(this.result)


    // alert(`Email: ${this.email}\nPassword:${this.password}`);
    // this.submitted = true;
  }

  login() {

  }

}
