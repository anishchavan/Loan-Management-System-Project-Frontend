import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { AppliedApplicationService } from '../../../service/applied-application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applied-application',
  templateUrl: './applied-application.component.html',
  styleUrl: './applied-application.component.css',
})
export class AppliedApplicationComponent implements OnInit {
  constructor(
    private appliedApplicationService: AppliedApplicationService,
    private router: Router
  ) {}
  applications: CustomerDetails[];

  ngOnInit(): void {
    this.appliedApplicationService
      .getAppliedApplications()
      .subscribe((data: CustomerDetails[]) => {
        this.applications = data;
      });
  }

  verifyDocuments(customerId: number) {
  let cid = JSON.stringify(customerId);
  localStorage.setItem("customerId",cid);
    this.router.navigateByUrl(`/verifyDocs/${customerId}`);
    console.log(customerId);
  }
}
