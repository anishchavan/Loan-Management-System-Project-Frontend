import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerifiedEnquiryComponent } from './view-verified-enquiry/view-verified-enquiry.component';

const routes: Routes = [
  {path:'view_enroll_enq', component:ViewEnquiryComponent},
{path:'view_verified_enq', component:ViewVerifiedEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
