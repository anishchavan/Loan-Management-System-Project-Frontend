import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customer-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  private url = 'http://localhost:8084/customer/saveCustomer';

  constructor(private http: HttpClient) { }

  saveApplicationForm(formData:any): Observable<any> {
   console.log(formData);
    return this.http.post(this.url, formData);
    
  }

  

}
