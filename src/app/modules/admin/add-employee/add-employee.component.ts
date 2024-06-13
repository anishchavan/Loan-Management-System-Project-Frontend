import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder, private employeeService:EmployeeService){}

  employeeForm: FormGroup;

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employeeId:[],
      employeeName:[],
      username:[],
      password:[],
      employeeType:[]
    })
  }

  onSubmit(){
    this.employeeService.saveEmployee(this.employeeForm.value).subscribe();
    alert("Employee has been registered successfully");
    this.employeeForm.reset();
  }

}
