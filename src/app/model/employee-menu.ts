export class EmployeeMenu {
    public static employeeMenu:Array<any>=[
        // 0th index
         {
            "ADMIN":[
                          {label:"Add Employee" , link:"add_emp"},
                          {label:"View Employee" , link:"view_emp"}
                    ],
            "CRM":[
                          {label:"View Enroll Enquiry" , link:"view_enroll_enq" },
                          {label:"View Verified Enquiry" , link:"view_verified_enq" },
                          {label:"View Loan Application" , link:"view_loan_app"},
                          
                   ],
            "OE":[
                            {label:"Pending Enquiries" , link:"pendingEnquiry" },
                            {label:"Check CIBIL Score" , link:"checkCIBIL" }, 
                            {label:"Applied Application", link:"appliedApplication"}
            ],
            "CM":null,
            "AH":"null"
         }
   
   
   
       ]
}

