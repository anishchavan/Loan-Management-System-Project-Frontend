import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Enquiry } from '../model/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  saveApplicant(enquire:Enquiry){
    return this.http.post("http://localhost:8080/consumer/register/applicant", enquire);
  }

  getEnquiries(){
    return this.http.get("http://localhost:8080/consumer/register/applicants");
  }
  getPendingEnquiries(){
    return this.http.get("http://localhost:8080/consumer/register/enquiries/pending");
  }
  checkCibil(enquiry:Enquiry)
  {
    return this.http.put("http://localhost:8081/CheckCIBIL/"+enquiry.applicantId,enquiry);
  }
  getapprovedEnquiries(){
    return this.http.get("http://localhost:8080/consumer/register/enquiries/approved");
  }
}
