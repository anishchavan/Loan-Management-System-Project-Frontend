import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerifiedEnquiryComponent } from './view-verified-enquiry/view-verified-enquiry.component';
import { ApplicationFormComponent } from './application-form/application-form.component';

const routes: Routes = [
  {path:'view_enroll_enq', component:ViewEnquiryComponent},
  {path:'view_verified_enq', component:ViewVerifiedEnquiryComponent},
 {path:'apply/:data', component:ApplicationFormComponent},
 {path:'home/about/:data', component:ViewEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
