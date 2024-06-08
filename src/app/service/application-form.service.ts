import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  private apiUrl = 'https://your-api-url.com/api/application';

  constructor(private http: HttpClient) { }

  saveApplicationForm(customerDetails: CustomerDetails): Observable<any> {
    console.log(customerDetails);
    return this.http.post(this.apiUrl, customerDetails);
    
  }

}
