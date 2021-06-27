import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  url: string = "http://localhost:3000/Users";

  getUsers() {
    return this.httpClient.get(this.url);
  }

  addEmployee(createBody: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'application/json');
    return this.httpClient.post(this.url, createBody, { headers: httpHeaders });
  }

}
