import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrl: './customer-login.component.css',
})
export class CustomerLoginComponent implements OnInit {
  loginForm: FormGroup;

  employeeType:string="Customer";

  constructor(
    private fb: FormBuilder,
    private cs: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: [],
    });
  }

  onLogin() {
    let un: string = this.loginForm.controls['username'].value;
    let ps: string = this.loginForm.controls['password'].value;

    this.cs.customerLogin(un, ps).subscribe(
      (data: any) => {
        if (data != null) {
          console.log(data);
          localStorage.setItem('username', data.username);
          localStorage.setItem('employeeType', this.employeeType);
          this.router.navigateByUrl(`/homeloan/${this.employeeType}`);
        } else {
          alert('Enter valid Credentials..!');
        }
      }
    );
  }
}


