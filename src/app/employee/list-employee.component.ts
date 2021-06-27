import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  users: any;
  page: number = 1;

  constructor(public empService: EmployeeService) {
  }
  ngOnInit(): void {
    this.empService.getUsers().subscribe((response) => {
      this.users = response;
    })
  }
}
