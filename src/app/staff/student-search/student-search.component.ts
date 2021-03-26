import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StaffStudentService } from '../staff-student.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent implements OnInit {
  searchControl = new FormControl();
  students: any;
  subscription: any;

  constructor(private studentService: StaffStudentService) {

  }

  ngOnInit(): void {
    this.subscription = this.studentService.getStudents().subscribe(
      articles => this.students = articles
    )

    this.subscription = this.searchControl.valueChanges.subscribe(
      value => {
        if (value.length > 0) {
          this.studentService.getStudentsByNameOrID(value).subscribe(articles => this.students = articles)
          console.log(value);
        }
        else {
          this.ngOnInit();
        }

      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
