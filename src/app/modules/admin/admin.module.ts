import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { ViewStatiticsComponent } from './view-statitics/view-statitics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    ViewStatiticsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    AddEmployeeComponent,
    ViewEmployeeComponent,
    ViewStatiticsComponent
  ]
})
export class AdminModule { }
