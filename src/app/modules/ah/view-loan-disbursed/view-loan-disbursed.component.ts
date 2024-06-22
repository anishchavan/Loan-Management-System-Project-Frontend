import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { LoandisburseService } from '../../../service/loandisburse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-loan-disbursed',
  templateUrl: './view-loan-disbursed.component.html',
  styleUrl: './view-loan-disbursed.component.css'
})
export class ViewLoanDisbursedComponent implements OnInit {
  customer: CustomerDetails[];

  constructor(private ls: LoandisburseService, private router: Router) {}

  ngOnInit(): void {
    this.ls.getloanDisburse().subscribe((data: CustomerDetails[]) => {
      this.customer = data;
    });
  }

  generateLedger(c: CustomerDetails) {
    let cid = JSON.stringify(c.customerId)
    localStorage.setItem("data",cid);
    this.router.navigateByUrl('/tocreateledger/'+c.customerId);
  }
}
