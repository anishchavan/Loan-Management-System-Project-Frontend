import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {}

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }

  onLogin() {
    let un: string = this.loginForm.controls['username'].value;
    let ps: string = this.loginForm.controls['password'].value;

    this.empService.loginCheck(un, ps).subscribe((data: any) => {
      if (data != null) {
        console.log(data);
        localStorage.setItem('username', data.username);
        localStorage.setItem('employeeType', data.employeeType);

        this.router.navigateByUrl(`/homeloan/${data.employeeType}`);
      } else {
        alert('Enver valid Credentials..!');
      }
    });
  }
}
