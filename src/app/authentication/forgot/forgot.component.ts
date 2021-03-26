import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
