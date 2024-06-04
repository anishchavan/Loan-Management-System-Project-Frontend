import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { HomeComponent } from './template/home/home.component';
import { EmployeeLayoutComponent } from './includes/employee-layout/employee-layout.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  { path:'home', component:HomeComponent, children:[
   {path:'', redirectTo:'about',pathMatch:'full'},
   {path:'about', component:AboutComponent},
   {path:'contactus', component:ContactUsComponent},
   {path:'enquiry', component:EnquiryComponent},
   {path:'login',component:LoginComponent}
  ]},
{
  path:'homeloan', component:EmployeeLayoutComponent, children:[
    {path:"ADMIN", loadChildren:()=>import("./modules/admin/admin.module").then(file=>file.AdminModule)},
    {path:"CRM", loadChildren:()=>import("./modules/crm/crm.module").then(file=>file.CrmModule)}
  ]
}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
