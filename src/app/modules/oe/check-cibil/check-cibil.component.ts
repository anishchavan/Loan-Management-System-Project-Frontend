import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../../service/enquiry.service';
import { Router } from '@angular/router';
import { Enquiry } from '../../../model/enquiry';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrl: './check-cibil.component.css',
})
export class CheckCIBILComponent implements OnInit {
  constructor(private enquiryService: EnquiryService, private router:Router) {}
  enquiries: Enquiry[];

  ngOnInit(): void {
    this.enquiryService.getPendingEnquiries().subscribe((data: Enquiry[]) => {
      this.enquiries = data;
    });
  }

  checkCibil(enquiry: Enquiry) {
    this.enquiryService.checkCibil(enquiry).subscribe();
    alert('Your CIBIL has been checked');
    this.router.navigateByUrl("/home/about");
  }
}
