import { Component, OnInit } from '@angular/core';
import { SanctionLetter } from '../../../model/sanction-letter';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VerifyApplicationComponent } from '../../oe/verify-application/verify-application.component';
import { VerifyApplicationService } from '../../../service/verify-application.service';
import { CustomerDetails } from '../../../model/customer-details';
import { Router } from '@angular/router';
import { CustomerLoginComponent } from '../../../includes/customer-login/customer-login.component';

@Component({
  selector: 'app-generate-sanction-letter',
  templateUrl: './generate-sanction-letter.component.html',
  styleUrl: './generate-sanction-letter.component.css',
})
export class GenerateSanctionLetterComponent implements OnInit {
  sanctionForm: FormGroup;
  cust: CustomerDetails;
  emiAmount: number;
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

      this.sanctionForm.get('customerFirstName').setValue(this.cust.customerFirstName);
      this.calculateEMI();
    });
    this.sanctionForm.valueChanges.subscribe(() => {
      this.calculateEMI();
    });

  }
  calculateEMI() {
    const principal = this.sanctionForm.get('loanAmountSanctioned')?.value;
    const interestRate = this.sanctionForm.get('rateOfInterest')?.value;
    const tenure = this.sanctionForm.get('loanTenure')?.value;

    if (principal && interestRate && tenure) {
      const monthlyInterestRate = interestRate / (12 * 100);
      const n = tenure;
      const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) / (Math.pow(1 + monthlyInterestRate, n) - 1);
      this.emiAmount = Math.round(emi);

      this.sanctionForm.patchValue({ monthlyEmiAmount: this.emiAmount }, { emitEvent: false });
    } else {
      this.emiAmount = 0;
      this.sanctionForm.patchValue({ monthlyEmiAmount: 0 }, { emitEvent: false });
    }
  }

  onSubmit() {
      this.gs.getSanctionedLetter(this.sanctionForm.value).subscribe();
      this.gs.updateLoanStatusToSanctionGenerated(this.sanctionForm.value).subscribe();
      this.router.navigateByUrl("/homeloan/CM/verifiedCustomer");
  
  }
  
  
}

