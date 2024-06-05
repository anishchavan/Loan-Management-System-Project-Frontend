
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  loginCheck(un:string, ps:string){
    console.log(un);
    console.log(ps);
    return this.http.get(`http://localhost:8080/consumer/register/login/${un}/${ps}`);    
  }

  saveEmployee(emp:Employee){
    return this.http.post(`http://localhost:8080/consumer/register/employee`,emp);
  }

  getEmployees(){
    return this.http.get(`http://localhost:8080/consumer/register/employees`);
  }
}
