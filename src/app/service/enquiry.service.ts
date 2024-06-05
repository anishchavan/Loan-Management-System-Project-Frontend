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
}
