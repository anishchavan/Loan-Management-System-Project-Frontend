import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedCustomerComponent } from './approved-customer/approved-customer.component';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { ViewLoanDisbursedComponent } from './view-loan-disbursed/view-loan-disbursed.component';
import { GenerateLedgerComponent } from './generate-ledger/generate-ledger.component';

const routes: Routes = [
  { path: 'approvedCustomer', component: ApprovedCustomerComponent },
  { path: 'toloandisburse/:data', component: LoanDisbursementComponent },
  { path: 'ViewLoanDisbursed', component: ViewLoanDisbursedComponent },
  { path: 'tocreateledger/:data', component: GenerateLedgerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
