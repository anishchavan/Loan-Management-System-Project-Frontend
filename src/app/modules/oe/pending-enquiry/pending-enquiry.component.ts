import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../service/enquiry.service';
import { Router } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';

@Component({
  selector: 'app-pending-enquiry',
  templateUrl: './pending-enquiry.component.html',
  styleUrl: './pending-enquiry.component.css'
})
export class PendingEnquiryComponent implements OnInit{

  constructor(private enquiryService:EnquiryService,private router:Router){}
  enq:Enquiry[];

  ngOnInit(): void {
    this.enquiryService.getPendingEnquiries().subscribe((data:Enquiry[])=>{
      this.enq=data;
    
})
  }

  view(){
  this.enq.forEach(e => {
    console.log(e)
    });
}
}
