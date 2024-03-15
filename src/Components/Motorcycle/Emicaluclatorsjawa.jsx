import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

export default function Emicalculatorsjawa() {
    const [loanAmount, setLoanAmount] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [totalPaymentWithInterest, setTotalPaymentWithInterest] = useState(0);
    const [downPayment, setDownPayment] = useState(0);

    const handleLoanAmountChange = (e) => {
        const amount = e.target.value;
        setLoanAmount(amount);
        calculateLoan(amount, loanTerm, interestRate, downPayment);
    };

    const handleLoanTermChange = (e) => {
        const term = e.target.value;
        setLoanTerm(term);
        calculateLoan(loanAmount, term, interestRate, downPayment);
    };

    const handleInterestRateChange = (e) => {
        const rate = parseFloat(e.target.value).toFixed(2); 
        setInterestRate(rate);
        calculateLoan(loanAmount, loanTerm, rate, downPayment);
    };

    const handleDownPaymentChange = (e) => {
        const payment = e.target.value;
        setDownPayment(payment);
        calculateLoan(loanAmount, loanTerm, interestRate, payment);
    };

    const calculateLoan = (amount, term, rate, downPayment) => {
        amount = parseFloat(amount) || 0;
        term = parseFloat(term) || 0;
        rate = parseFloat(rate) || 0;
        downPayment = parseFloat(downPayment) || 0;

        const principal = amount - downPayment;
        const monthlyRate = rate / 100 / 12;
        const months = term;

        if (amount > 0 && term > 0 && rate > 0) {
            const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            setMonthlyEMI(emi.toFixed(2));
            const totalPayment = emi * months;
            setTotalPaymentWithInterest(totalPayment.toFixed(2));
        } else {
            setMonthlyEMI(0);
            setTotalPaymentWithInterest(0);
        }
    };

    return (
        <div className='emi-calculator-section'>
            <Link className='link' to='/'>
                <p className='back-page'>
                    Home <span><FiChevronRight/></span> Emi Calculator
                </p>
            </Link>
            <div className='text-center'>
                    <h1 className="section__ttl">EMI Calculator</h1>
                <p className="section__desc h__mb30">Select the various details of your preferred bike loan such as Principal Amount, Interest Rate, Loan Term, Loan Processing fee with your preferred mode of EMI payment. The break-ups of Total Amount Payable and Loan Pay-Off Period are graphically listed. Click on any portion of the graph to view its details. The Starting Balance, Principal, Interest and Ending Balance for the entire tenure is represented as an Amortization Table. Click the “Apply Loan” button to begin the process of availing your loan.</p>
                    </div>
            <section>
                <div className='container emi-calculator-main'>
                  
                
                    <div className='row'>
                        <div className='col-lg-6 emi-calculator-slider '>
                            <div>
                                <div className='d-flex justify-content-between white'>
                                    <p>Down Payment</p>
                                    <span className='box'>&#8377;{downPayment}</span>
                                </div>
                                <div>
                                    <input type="range" className="input__control" name="downPayment" value={downPayment} max="300000" step="5000" onChange={handleDownPaymentChange} />
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-between white'>
                                    <p>Loan Amount</p>
                                    <span className='box'>&#8377;{loanAmount}</span>
                                </div>
                                <div>
                                    <input type="range" className="input__control" name="loanAmount" value={loanAmount} max="600000" step="5000" onChange={handleLoanAmountChange} />
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-between white'>
                                    <p>Loan Term</p>
                                    <span className='box'>{loanTerm} Months</span>
                                </div>
                                <div>
                                    <input type="range" className="input__control" name="loanTerm" value={loanTerm} min="12" max="60" step="12" onChange={handleLoanTermChange} />
                                </div>
                            </div>
                            <div>
                                <div className='d-flex justify-content-between white'>
                                    <p>Interest Rate (Per/Annum)</p>
                                    <span className='box'>{interestRate}</span>
                                </div>
                                <div>
                                    <input type="range" className="input__control" name="interestRate" value={interestRate} max="30" step="0.01" onChange={handleInterestRateChange} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex emi-output text-center'>
                            <div className='d-flex justify-content-center align-items-center emi-output-main'>
                                <div className='emi-output-info' >
                                    <p>Loan Amount</p>
                                    <span>{loanAmount}</span>
                                </div>
                                <div className='emi-output-info'>
                                    <p>Interest Payable</p>
                                    <span>{((monthlyEMI * loanTerm) - (loanAmount - downPayment)).toFixed(2)}</span>
                                </div>
                                <div className='emi-output-info'>
                                    <p>Total loan payment</p>
                                    <span>{totalPaymentWithInterest}</span>
                                </div>
                            </div>
                            <div className='emi-info'>
                                <div className='emi-info-main'>
                                    <p>EMI</p>
                                    <span>Per / Month</span>
                                </div>
                                <div className='emi-info-amount'>
                                    <p>&#8377; {monthlyEMI}</p>
                                </div>
                            </div>
                            <div>
                                <Link to='/ContactUsPageJawa' className='link'>
                                    <p className='book-now-emi '>Enquiry Now</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
