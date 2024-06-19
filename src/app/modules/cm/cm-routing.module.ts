import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewVerifiedCustomerComponent } from './view-verified-customer/view-verified-customer.component';
import { GenerateSanctionLetterComponent } from './generate-sanction-letter/generate-sanction-letter.component';

const routes: Routes = [
  { path: 'verifiedCustomer', component: ViewVerifiedCustomerComponent },
  { path: 'toSanctionLetter/:data', component: GenerateSanctionLetterComponent },
  { path: 'homeloan/CM/verifiedCustomer', component: ViewVerifiedCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
