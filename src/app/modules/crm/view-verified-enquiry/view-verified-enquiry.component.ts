import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../service/enquiry.service';
import { Router } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';

@Component({
  selector: 'app-view-verified-enquiry',
  templateUrl: './view-verified-enquiry.component.html',
  styleUrl: './view-verified-enquiry.component.css'
})
export class ViewVerifiedEnquiryComponent implements OnInit {

  constructor(private enquiryService:EnquiryService,private router:Router){}
  enq:Enquiry[];

  ngOnInit(): void {
    this.enquiryService.getapprovedEnquiries().subscribe((data:Enquiry[])=>{
      this.enq=data;
    
})
  }
  apply(applicantId:number)
  {
    this.router.navigateByUrl('/crm/apply/'+applicantId)
  }
}
