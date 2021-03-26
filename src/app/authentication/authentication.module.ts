import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { GlobalModule } from '../global/global.module';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: LoginComponent },// canActivate: [GuardAuthPages]
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    ForgotComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GlobalModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService]
})
export class AuthenticationModule { }
