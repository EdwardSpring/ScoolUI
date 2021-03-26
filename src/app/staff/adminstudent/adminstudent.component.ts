import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adminstudent',
  templateUrl: './adminstudent.component.html',
  styleUrls: ['./adminstudent.component.css']
})
export class AdminstudentComponent implements OnInit {
  id: any;

  displayAddStudent: boolean = false;
  displaySearchResult: boolean = false;
  displaySearchStudent: boolean = true;
  closed: boolean = true;
  showOptions: boolean = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    })
    // alert(this.id);
  }

  showAddComponent() {
    this.displayAddStudent = true;
    this.showOptions = false;
    this.closed = false;

    this.displaySearchResult = false;
    this.displaySearchStudent = false;
  }

  showSearchComponent() {
    this.displaySearchStudent = true;
    this.showOptions = false;
    this.closed = false;

    this.displaySearchResult = false;
    this.displayAddStudent = false;
  }

  close() {
    this.closed = true;
    this.showOptions = true;

    this.displayAddStudent = false
    this.displaySearchResult = false;
    this.displaySearchStudent = false;

    this.ngOnInit();
  }

}
