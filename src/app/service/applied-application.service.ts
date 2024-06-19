import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppliedApplicationService {
  constructor(private http: HttpClient) {}

  getAppliedApplications():any {
    return this.http.get('http://localhost:8084/customer/getCustomer/Applied');
  }
}
