import { CustomerAddress } from "./customer-address";
import { CustomerBankDetails } from "./customer-bank-details";
import { CustomerDocuments } from "./customer-documents";
import { EmploymentDetails } from "./employment-details";
import { GuarantorDetails } from "./guarantor-details";
import { LoanDisbursement } from "./loan-disbursement";
import { PreviousLoanDetails } from "./previous-loan-details";
import { PropertyDetails } from "./property-details";
import { SanctionLetter } from "./sanction-letter";

export class CustomerDetails {
    customerId:number;
    customerFirstName:string;
    customerMiddleName:string;
    customerLastName:string;
    mobileNumber:number;
    customerEmailId:string;
    panCardNumber:string;
    aadharNumber:number;
    customerDateOfBirth:string;
    customerGender:string;
    qualification:string;
    customerCibilScore:number;

    customerAddress:CustomerAddress;
    customerBankDetails:CustomerBankDetails;
    employmentDetails:EmploymentDetails;
    guarantorDetails:GuarantorDetails;
    previousLoanDetails:PreviousLoanDetails;
    propertyDetails:PropertyDetails;
    customerDocuments:CustomerDocuments;
    loanDisbursement:LoanDisbursement;
    sanctionLetter:SanctionLetter;
}
