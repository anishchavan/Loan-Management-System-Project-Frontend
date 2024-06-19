import { Component, OnInit } from '@angular/core';
import { SanctionLetter } from '../../../model/sanction-letter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VerifyApplicationComponent } from '../../oe/verify-application/verify-application.component';
import { VerifyApplicationService } from '../../../service/verify-application.service';
import { CustomerDetails } from '../../../model/customer-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-sanction-letter',
  templateUrl: './generate-sanction-letter.component.html',
  styleUrl: './generate-sanction-letter.component.css',
})
export class GenerateSanctionLetterComponent implements OnInit {
  sanctionForm: FormGroup;
  cust: CustomerDetails;
  constructor(private fb: FormBuilder, private gs: VerifyApplicationService, private router:Router) {}

  ngOnInit(): void {
    this.sanctionForm = this.fb.group({
      customerId: [],
      sanctionId: [],
      sanctionDate: [],
      applicantName: [],
      loanAmountSanctioned: [],
      rateOfInterest: [],
      loanTenure: [],
      monthlyEmiAmount: [],
    });
    let cid = parseInt(localStorage.getItem('data'));
    this.gs.getCustomerById(cid).subscribe((cs: CustomerDetails) => {
      this.cust = cs;

      this.sanctionForm.patchValue({
        customerId: this.cust.customerId,
        sanctionId: this.cust.sanctionLetter.sanctionId,
        sanctionDate: this.cust.sanctionLetter.sanctionDate,
        applicantName: this.cust.customerFirstName,
        loanAmountSanctioned: this.cust.sanctionLetter.loanAmountSanctioned,
        rateOfInterest: this.cust.sanctionLetter.rateOfInterest,
        loanTenure: this.cust.sanctionLetter.loanTenure,
        monthlyEmiAmount: this.cust.sanctionLetter.monthlyEmiAmount,
      });
    });
  }

  onSubmit() {
      this.gs.getSanctionedLetter(this.sanctionForm.value).subscribe();
      this.gs.updateLoanStatusToSanctionGenerated(this.sanctionForm.value).subscribe();
      this.router.navigateByUrl("/homeloan/CM/verifiedCustomer");

  
  }
}
