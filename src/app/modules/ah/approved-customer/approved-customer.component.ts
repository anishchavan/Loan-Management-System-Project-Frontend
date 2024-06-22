import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CustomerService } from '../../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approved-customer',
  templateUrl: './approved-customer.component.html',
  styleUrl: './approved-customer.component.css'
})
export class ApprovedCustomerComponent implements OnInit{
  customer: CustomerDetails[];
  constructor(private cs: CustomerService, private router:Router) {}

  ngOnInit(): void {
    this.cs.approvedCustomer().subscribe((data: CustomerDetails[]) => {
      this.customer = data;
    });
  }

  loandisbursement(c: CustomerDetails) {
    // let cid = JSON.stringify(c.customerId)
    // localStorage.setItem("data",cid);
    this.router.navigateByUrl('/toloandisburse/'+c.customerId);
  }
}
