import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details';

@Injectable({
  providedIn: 'root',
})
export class VerifyApplicationService {
  constructor(private http: HttpClient) {}

  getCustomerById(customerId: number) {
    return this.http.get(
      `http://localhost:8084/customer/getCustomerById/${customerId}`
    );
  }

  verifyDocs(cs: CustomerDetails) {
    console.log(cs);
    return this.http.put(
      `http://localhost:8084/customer/updateCustomer/Applied/${cs.customerId}`,
      cs
    );
  }

  getVerifiedCustomer(){
    return this.http.get("http://localhost:8084/customer/getCustomer/Verified");
  }

  getSanctionedLetter(c:CustomerDetails){
    console.log(c);
    return this.http.put(`http://localhost:8084/sanction/generatePdf/${c.customerId}`,c);
  }

  updateLoanStatusToSanctionGenerated(cs: CustomerDetails) {
    console.log(cs);
    return this.http.put(
      `http://localhost:8084/customer/updateCustomer/Verified/${cs.customerId}`,
      cs
    );
  }

}
