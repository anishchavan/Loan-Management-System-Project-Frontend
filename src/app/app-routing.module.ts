import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'enquiry', component:EnquiryComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
