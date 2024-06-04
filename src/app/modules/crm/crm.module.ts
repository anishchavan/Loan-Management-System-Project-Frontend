import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerifiedEnquiryComponent } from './view-verified-enquiry/view-verified-enquiry.component';


@NgModule({
  declarations: [
    AddEnquiryComponent,
    ViewEnquiryComponent,
    ViewVerifiedEnquiryComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule
  ],
  exports:[
    AddEnquiryComponent,
    ViewEnquiryComponent,
    ViewVerifiedEnquiryComponent
  ]

})
export class CrmModule { }
