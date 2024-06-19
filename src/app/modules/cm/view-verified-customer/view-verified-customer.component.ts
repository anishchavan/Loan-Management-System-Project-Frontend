import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { VerifyApplicationService } from '../../../service/verify-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-verified-customer',
  templateUrl: './view-verified-customer.component.html',
  styleUrl: './view-verified-customer.component.css',
})
export class ViewVerifiedCustomerComponent implements OnInit {
  customer: CustomerDetails[];

  constructor(private vs: VerifyApplicationService, private router: Router) {}

  ngOnInit(): void {
    this.vs.getVerifiedCustomer().subscribe((data: CustomerDetails[]) => {
      this.customer = data;
    });
  }

  generateSanctionLetter(c: CustomerDetails) {
    let cid = JSON.stringify(c.customerId)
    localStorage.setItem("data",cid);
    this.router.navigateByUrl('/toSanctionLetter/'+c.customerId);
  }

  
}
