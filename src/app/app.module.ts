import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { EnquiryComponent } from './includes/enquiry/enquiry.component';
import { LoginComponent } from './includes/login/login.component';
import { AboutComponent } from './template/about/about.component';
import { HomeComponent } from './template/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLayoutComponent } from './includes/employee-layout/employee-layout.component';
import { EmployeeHeaderComponent } from './includes/employee-header/employee-header.component';
import { SideNavbarComponent } from './includes/side-navbar/side-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrmModule } from './modules/crm/crm.module';
import { CmModule } from './modules/cm/cm.module';
import { OeModule } from './modules/oe/oe.module';
import { CustomerLoginComponent } from './includes/customer-login/customer-login.component';
import { LoginCompComponent } from './includes/login-comp/login-comp.component';
import { CustomerModule } from './modules/customer/customer.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactUsComponent,
    EnquiryComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    EmployeeLayoutComponent,
    EmployeeHeaderComponent,
    SideNavbarComponent,
    CustomerLoginComponent,
    LoginCompComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CrmModule,
    OeModule,
    CmModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
