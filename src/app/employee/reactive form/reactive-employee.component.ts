import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-reactive-employee',
  templateUrl: './reactive-employee.component.html',
  styleUrls: ['./reactive-employee.component.css']
})
export class ReactiveEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(public empService: EmployeeService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({ // building the form using formBuilder
      id: ['',Validators.required],    //in the formBuilder - we are creating a group of formelements(these should be exactly sameasyour form)
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.email,Validators.required]],
      mobileNumber: ['',[Validators.minLength(10), Validators.required]],
      skills: this.fb.group({
        skillName: [''],
        experienceInYears: [''],
        proficiency: ['']
      })
    });
  }

  onSubmit(): void {
    const formData = this.employeeForm.value;
    console.log(formData);
    const newFormdata = { id: formData.id, firstName: formData.firstName, lastName: formData.lastName, email: formData.email, mobileNumber: formData.mobileNumber };
    this.empService.addEmployee(newFormdata).subscribe(
      response => { this.router.navigate(['employee/list']) }
    );
  }

  addSkillButtonClick(): void {
    console.log("click event completed successfully");
    console.log(this.employeeForm.value.skills);
  }

}