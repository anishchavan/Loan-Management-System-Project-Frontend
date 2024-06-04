import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-header',
  templateUrl: './employee-header.component.html',
  styleUrl: './employee-header.component.css'
})
export class EmployeeHeaderComponent {
  un:string;
  ut:string;
 
   ngOnInit(): void {
      this.un=localStorage.getItem("username");
      this.ut=localStorage.getItem("employeeType");

   }
}
