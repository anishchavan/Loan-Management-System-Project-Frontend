import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { PendingEnquiryComponent } from './pending-enquiry/pending-enquiry.component';
import { CheckCIBILComponent } from './check-cibil/check-cibil.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PendingEnquiryComponent,
    CheckCIBILComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    PendingEnquiryComponent,
    CheckCIBILComponent
  ]
})
export class OeModule { }
