import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingEnquiryComponent } from './pending-enquiry/pending-enquiry.component';
import { CheckCIBILComponent } from './check-cibil/check-cibil.component';
import { AppliedApplicationComponent } from './applied-application/applied-application.component';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';



const routes: Routes = [
  { path: 'pendingEnquiry', component: PendingEnquiryComponent },
  { path: 'checkCIBIL', component: CheckCIBILComponent },
  { path: 'appliedApplication', component: AppliedApplicationComponent },
  { path: 'verifyDocs/:customerId', component: VerifyApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OeRoutingModule {}
