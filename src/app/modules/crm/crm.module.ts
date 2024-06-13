import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ViewVerifiedEnquiryComponent } from './view-verified-enquiry/view-verified-enquiry.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ViewEnquiryComponent,
    ViewVerifiedEnquiryComponent,
    ApplicationFormComponent,
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    ViewEnquiryComponent,
    ViewVerifiedEnquiryComponent,
    ApplicationFormComponent,
  ],
})
export class CrmModule {}
