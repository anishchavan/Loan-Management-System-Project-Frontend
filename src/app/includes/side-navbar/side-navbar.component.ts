import { Component, OnInit } from '@angular/core';
import { EmployeeMenu } from '../../model/employee-menu';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent implements OnInit {
  employeeRoles:Array<any>
  employeeType:string;
  ngOnInit(): void {

   this.employeeType=localStorage.getItem("employeeType");
                                    //index property
     this.employeeRoles=EmployeeMenu.employeeMenu[0][this.employeeType];
    
  }
}
