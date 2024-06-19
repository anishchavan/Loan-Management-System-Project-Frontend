import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormService } from '../../../service/application-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css',
})
export class ApplicationFormComponent implements OnInit {
  customerDetails: FormGroup;
  isLinear = false;
  onSelectPanCard: any;
  onSelectAadharCard: any;
  onSelectPhoto: any;
  onSelectSalarySlips: any;
  onSelectBankStatement: any;
  onSelectSanctionLetter: any;
  panCardImg: any;
  aadharCardImg: any;
  photoImg: any;
  salarySlipsImg: any;
  bankStatementImg: any;
  sanctionLetterImg: any;

  reader = new FileReader();

  constructor(
    private fb: FormBuilder,
    private applicationFormService: ApplicationFormService,
    private router: Router
  ) { }

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
      customerLoanStatus: ['Applied'],
      customerCibilScore: [],
      username: [],
      password: [],

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
        agreementDate: [],
        totalLoanSanctionedAmount: [],
        transferedAmount: [],
        amountPaidDate: [],
        paymentStatus: [],
        bankName: [],
        bankAccountNumber: [],
        bankIfscCode: [],
        accountType: [],
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

  onselectPanCard(event) {
    this.onSelectPanCard = event.target.files[0];
    this.reader.onload = (e) => (this.panCardImg = this.reader.result);
    this.reader.readAsDataURL(this.onSelectPanCard);
  }

  onselectAadharCard(event) {
    this.onSelectAadharCard = event.target.files[0];
    this.reader.onload = (e) => (this.aadharCardImg = this.reader.result);
    this.reader.readAsDataURL(this.onSelectAadharCard);
  }

  onselectPhoto(event) {
    this.onSelectPhoto = event.target.files[0];
    this.reader.onload = (e) => (this.photoImg = this.reader.result);
    this.reader.readAsDataURL(this.onSelectPhoto);
  }

  onselectSalarySlips(event) {
    this.onSelectSalarySlips = event.target.files[0];
    this.reader.onload = (e) => (this.salarySlipsImg = this.reader.result);
    this.reader.readAsDataURL(this.onSelectSalarySlips);
  }

  onselectBankStatement(event) {
    this.onSelectBankStatement = event.target.files[0];
    this.reader.onload = (e) => (this.bankStatementImg = this.reader.result);
    this.reader.readAsDataURL(this.onSelectBankStatement);
  }

  // onselectSanctionLetter(event) {
  //   this.onselectSanctionLetter = event.target.files[0];
  //   this.reader.onload = (e) => (this.sanctionLetterImg = this.reader.result);
  //   this.reader.readAsDataURL(this.onSelectSanctionLetter);
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('panCard', this.onSelectPanCard);
    formData.append('aadharCard', this.onSelectAadharCard);
    formData.append('photo', this.onSelectPhoto);
    formData.append('salarySlips', this.onSelectSalarySlips);
    formData.append('bankStatement', this.onSelectBankStatement);
    // formData.append('sanctionLetter', this.onSelectSanctionLetter);
    formData.append('jsondata', JSON.stringify(this.customerDetails.value));

    this.applicationFormService.saveApplicationForm(formData).subscribe();

    alert('Customer application has been saved successfully');
  }

  backToHome() {
    this.router.navigateByUrl('/home/about');
  }
}
