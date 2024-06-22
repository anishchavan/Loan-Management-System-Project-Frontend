import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details';

@Injectable({
  providedIn: 'root'
})
export class LoandisburseService {

  constructor( private http:HttpClient) {}

  getCustomerById(customerId: number) {
    return this.http.get(`http://localhost:8084/customer/getCustomerById/${customerId}`);
  }

  loanDisburse(c:CustomerDetails){
    return this.http.put(`http://localhost:8084/loanDisbursement/loanDisbursementupdate/${c.customerId}`,c);
  }
  getloanDisburse(){
    return this.http.get("http://localhost:8084/customer/getCustomer/LoanDisbursed");
  }
}
