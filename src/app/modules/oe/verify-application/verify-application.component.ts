import { Component, OnInit } from '@angular/core';
import { VerifyApplicationService } from '../../../service/verify-application.service';
import { CustomerDetails } from '../../../model/customer-details';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-application',
  templateUrl: './verify-application.component.html',
  styleUrl: './verify-application.component.css',
})
export class VerifyApplicationComponent implements OnInit {
  constructor(private vs: VerifyApplicationService, private router:Router) {}
  cs: CustomerDetails;
  data: any;

  ngOnInit(): void {
    let cid = parseInt(localStorage.getItem('customerId'));
    this.vs.getCustomerById(cid).subscribe((data: CustomerDetails) => {
      this.cs = data;
    });
  }

  verifyDocuments(cs:CustomerDetails){
   alert("Your documents are all cleared and verified");
    this.vs.verifyDocs(cs).subscribe();
    this.router.navigateByUrl("/home/about");
  }
}
