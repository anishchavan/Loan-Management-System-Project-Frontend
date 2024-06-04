import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{

  constructor(private employeeService:EmployeeService){}

  employees : Employee[];

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data:Employee[])=>{
      this.employees=data;
    })
  }
}
