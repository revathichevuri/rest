import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(public empService: EmployeeService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNumber: ['']
    });
  }

  onSubmit(): void {
    const formData = this.employeeForm.value;
    const newFormdata = { id: formData.id, firstName: formData.firstName, lastName: formData.lastName, email: formData.email, mobileNumber: formData.mobileNumber };
    this.empService.addEmployee(newFormdata).subscribe(
      response => { this.router.navigate(['list']) }
    );
  }

}
