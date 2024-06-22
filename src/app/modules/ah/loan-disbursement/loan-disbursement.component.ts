import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerDetails } from '../../../model/customer-details';
import { Router } from '@angular/router';
import { LoandisburseService } from '../../../service/loandisburse.service';

@Component({
  selector: 'app-loan-disbursement',
  templateUrl: './loan-disbursement.component.html',
  styleUrl: './loan-disbursement.component.css'
})
export class LoanDisbursementComponent implements OnInit{

  loanDisburseForm: FormGroup;
  cust: CustomerDetails;
  constructor(private fb: FormBuilder, private ls: LoandisburseService, private router:Router) {}

  ngOnInit(): void {
    this.loanDisburseForm = this.fb.group({
      customerId: [],
      agreementId: [],
      agreementDate: [],
      totalLoanSanctionedAmount: [],
      transferedAmount: [],
      amountPaidDate: [],
      paymentStatus: [],
      bankName: [],
      bankAccountNumber: [],
      bankIfscCode: [],
      accountType: []
    });
    let cid = parseInt(localStorage.getItem('data'));
    this.ls.getCustomerById(cid).subscribe((cs: CustomerDetails) => {
      this.cust = cs;

      this.loanDisburseForm.patchValue({
        customerId: this.cust.customerId,
        agreementId: this.cust.loanDisbursement.agreementId,
        agreementDate: this.cust.loanDisbursement.agreementDate,
        totalLoanSanctionedAmount: this.cust.loanDisbursement.totalLoanSanctionedAmount,
        transferedAmount: this.cust.loanDisbursement.transferedAmount,
        amountPaidDate: this.cust.loanDisbursement.amountPaidDate,
        paymentStatus: this.cust.loanDisbursement.paymentStatus,
        bankName: this.cust.loanDisbursement.bankName,
        bankAccountNumber: this.cust.loanDisbursement.bankAccountNumber,
        bankIfscCode: this.cust.loanDisbursement.bankIfscCode,
        accountType: this.cust.loanDisbursement.accountType
      });
      this.loanDisburseForm.get('totalLoanSanctionedAmount').setValue(this.cust.sanctionLetter.loanAmountSanctioned);
      this.loanDisburseForm.get('bankName').setValue(this.cust.customerBankDetails.bankName);
      this.loanDisburseForm.get('bankAccountNumber').setValue(this.cust.customerBankDetails.bankAccountNumber);
      this.loanDisburseForm.get('bankIfscCode').setValue(this.cust.customerBankDetails.ifscCode);
    });
  }

  onSubmit() {
      this.ls.loanDisburse(this.loanDisburseForm.value).subscribe();
      this.router.navigateByUrl("/homeloan/AH");
      

  
  }
}
