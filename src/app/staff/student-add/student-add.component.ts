import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../staff-student.model';
import { StaffStudentService } from "../staff-student.service";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  studentForm: FormGroup;
  subscription: any;

  constructor(private studentService: StaffStudentService, private fb: FormBuilder) {
    this.studentForm = fb.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", Validators.required],
        phone: ["", Validators.required],
        departmentID: ["", Validators.required],
      }
    )
  }

  ngOnInit(): void {

  }

  addStudent() {
    // console.log(this.studentForm.value);
    this.subscription = this.studentService.addStudent(this.studentForm.value).subscribe(article => console.log(article.result));
  }

  ngOnDestroy(): void {
    this.subscription.addStudent().unsubscribe
  }


}
