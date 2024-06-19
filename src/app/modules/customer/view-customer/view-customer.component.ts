import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from '../../../model/customer-details';
import { CustomerService } from '../../../service/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css',
})
export class ViewCustomerComponent implements OnInit {
  customer: CustomerDetails[];
  constructor(private cs: CustomerService) {}

  ngOnInit(): void {
    this.cs.viewCustomer().subscribe((data: CustomerDetails[]) => {
      this.customer = data;
    });
  }
}
