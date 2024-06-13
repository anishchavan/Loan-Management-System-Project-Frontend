import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { PendingEnquiryComponent } from './pending-enquiry/pending-enquiry.component';
import { CheckCIBILComponent } from './check-cibil/check-cibil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppliedApplicationComponent } from './applied-application/applied-application.component';
import { VerifyApplicationComponent } from './verify-application/verify-application.component';


@NgModule({
  declarations: [
    PendingEnquiryComponent,
    CheckCIBILComponent,
    AppliedApplicationComponent,
    VerifyApplicationComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports:[
    PendingEnquiryComponent,
    CheckCIBILComponent, 
    AppliedApplicationComponent,
    VerifyApplicationComponent
  ]
})
export class OeModule { }
