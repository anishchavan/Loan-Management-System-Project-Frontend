export class Ledger {
    ledgerId: number;
    ledgerCreatedDate: Date;
    totalLoanAmount: number;
    payableAmountwithInterest: number;
    tenure: number;
    monthlyEMI: number;
    amountPaidtillDate: number;
    remainingAmount: number;
    nextEmiDatestart: string;
    nextEmiDateEnd: string;
    defaulterCount: number;
    previousEmiStatus: string;
    currentMonthEmiStatus: string;
    loanEndDate: string;
    loanStatus: string;
}
