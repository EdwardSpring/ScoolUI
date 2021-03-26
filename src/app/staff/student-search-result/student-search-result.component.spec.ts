import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSearchResultComponent } from './student-search-result.component';

describe('StudentSearchResultComponent', () => {
  let component: StudentSearchResultComponent;
  let fixture: ComponentFixture<StudentSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
