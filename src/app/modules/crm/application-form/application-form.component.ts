import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormService } from '../../../service/application-form.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css',
})
export class ApplicationFormComponent implements OnInit {
  customerDetails: FormGroup;
  isLinear=false;

  constructor(
    private fb: FormBuilder,
    private applicationFormService: ApplicationFormService
  ) {}

  ngOnInit(): void {
    this.customerDetails = this.fb.group({
      customerFirstName: [],
      customerMiddleName: [],
      customerLastName: [],
      mobileNumber: [],
      customerEmailId: [],
      panCardNumber: [],
      aadharNumber: [],
      customerDateOfBirth: [],
      customerGender: [],
      qualification: [],
      customerCibilScore: [],

      customerAddress: this.fb.group({
        areaName: [],
        cityName: [],
        district: [],
        state: [],
        pincode: [],
      }),
      customerBankDetails: this.fb.group({
        accountHolderName: [],
        bankName: [],
        bankAccountNumber: [],
        ifscCode: [],
      }),
      employmentDetails: this.fb.group({
        employerName: [],
        employerContact: [],
        employerEmail: [],
        workingFrom: [],
        designation: [],
        orgType: [],
        monthlyIncome: [],
      }),
      guarantorDetails: this.fb.group({
        guarantorName: [],
        guarantorAddress: [],
        mobileNumber: [],
        designation: [],
      }),
      loanDisbursement: this.fb.group({
        totalLoanSanctionedAmount: [],
        transferedAmount: [],
        amountPaidDate: [],
        paymentStatus: [],
        bankAccountNumber: [],
        bankIfscNumber: [],
      }),
      previousLoanDetails: this.fb.group({
        loanAmount: [],
        loanTenure: [],
        paidAmount: [],
        remainingAmount: [],
        bankName: [],
      }),
      propertyDetails: this.fb.group({
        propertyAddress: [],
        propertyName: [],
        propertyAgreementAmount: [],
      }),
      sanctionLetter: this.fb.group({
        sanctionDate: [],
        applicantName: [],
        loanAmountSanctioned: [],
        rateOfInterest: [],
        loanTenure: [],
        monthlyEmiAmount: [],
        termsAndCondition: [],
        sanctionLetter: [],
      }),
      customerDocuments: this.fb.group({
        panCard: [],
        aadharCard: [],
        photo: [],
        salarySlips: [],
        bankStatement: [],
      }),
    });
  }

  onSubmit(){
    this.applicationFormService.saveApplicationForm(this.customerDetails.value).subscribe();
    // alert("Product Registered..!");
    // this.customerDetails.reset();
  }

 
}
