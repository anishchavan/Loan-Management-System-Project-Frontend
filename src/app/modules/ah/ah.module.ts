import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLoanDisbursedComponent } from './view-loan-disbursed/view-loan-disbursed.component';
import { GenerateLedgerComponent } from './generate-ledger/generate-ledger.component';


@NgModule({
  declarations: [
    ApprovedCustomerComponent,
    LoanDisbursementComponent,
    ViewLoanDisbursedComponent,
    GenerateLedgerComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AhModule { }
