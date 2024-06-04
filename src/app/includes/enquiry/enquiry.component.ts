import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryService } from '../../service/enquiry.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent implements OnInit {

  constructor(private fb:FormBuilder, private enquiryService:EnquiryService, private activatedRoute:ActivatedRoute){}

  enquiryForm : FormGroup;

  ngOnInit(): void {
    this.enquiryForm=this.fb.group({
      applicantId:[],
      applicantName:[],
      panCardNo:[],
      applicantMobileNo:[],
      applicantEmail:[],
      cibilScore:null,
      cibilStatus:null
    })
  }

  onSubmit(){
    this.enquiryService.saveApplicant(this.enquiryForm.value).subscribe();
    alert("Applicant registered successfully. Our Customer Representative will contact you shortly");
  }


}
