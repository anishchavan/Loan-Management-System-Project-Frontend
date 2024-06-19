import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { ViewVerifiedCustomerComponent } from './view-verified-customer/view-verified-customer.component';
import { GenerateSanctionLetterComponent } from './generate-sanction-letter/generate-sanction-letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ViewVerifiedCustomerComponent,
    GenerateSanctionLetterComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CmModule { }
