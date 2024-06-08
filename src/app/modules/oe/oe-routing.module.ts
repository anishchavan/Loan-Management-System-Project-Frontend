import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingEnquiryComponent } from './pending-enquiry/pending-enquiry.component';
import { CheckCIBILComponent } from './check-cibil/check-cibil.component';

const routes: Routes = [
  {path:'pendingEnquiry', component:PendingEnquiryComponent},
{path:'checkCIBIL', component:CheckCIBILComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
