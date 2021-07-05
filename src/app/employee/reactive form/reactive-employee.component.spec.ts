import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEmployeeComponent } from './reactive-employee.component';

describe('ReactiveEmployeeComponent', () => {
  let component: ReactiveEmployeeComponent;
  let fixture: ComponentFixture<ReactiveEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
