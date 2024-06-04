import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../../../model/enquiry';
import { EnquiryService } from '../../../service/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit {
 
  constructor(private enquiryService:EnquiryService){}
  enquiries:Enquiry[];

  ngOnInit(): void {
    this.enquiryService.getEnquiries().subscribe((data:Enquiry[])=>{
      this.enquiries=data;
    })
}
}