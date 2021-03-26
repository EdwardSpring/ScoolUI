import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GlobalModule } from '../global/global.module';
import { AdminstudentComponent } from './adminstudent/adminstudent.component';
import { RouterModule } from '@angular/router';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentSearchResultComponent } from './student-search-result/student-search-result.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes = [
  {
    path: '',
    component: StaffDashboardComponent,
    //canActivate: [GuardPrivatePages]
  },
  {
    path: 'students',
    component: AdminstudentComponent
  },

]


@NgModule({
  declarations: [
    AdminstudentComponent,
    StaffDashboardComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentSearchResultComponent,
    StudentSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    GlobalModule,
    RouterModule.forChild(routes),
  ],
})
export class StaffModule { }
