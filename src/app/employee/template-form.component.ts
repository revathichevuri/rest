import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor(public empService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit(employeeForm: NgForm): void {
    const formData = employeeForm.value;
    const newFormdata = { id: formData.id, firstName: formData.firstName, lastName: formData.lastName, email: formData.email, mobileNumber: formData.mobileNumber };
    this.empService.addEmployee(newFormdata).subscribe(
      response => { this.router.navigate(['list']) }
    );
  }

}
