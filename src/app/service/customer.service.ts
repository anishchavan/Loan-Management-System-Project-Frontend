import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  customerLogin(un:string, ps:string){
    return this.http.get(`http://localhost:8084/customer/customerLogin/${un}/${ps}`)
  }

  viewCustomer(){
    return this.http.get("http://localhost:8084/customer/getCustomer/SanctionLetterGenerated");
  }

  sanctionLetterAccepted(c:CustomerDetails){
    return this.http.put(`http://localhost:8084/customer/updateCustomer/SanctionLetterGenerated/${c.customerId}`,
      c)
  }
  approvedCustomer(){
    return this.http.get("http://localhost:8084/customer/getCustomer/SanctionLetterApproved");
  }
}
