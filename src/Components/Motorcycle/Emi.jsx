import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmiCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [loanTerm, setLoanTerm] = useState(36);
    const [interestRate, setInterestRate] = useState('');
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [totalPaymentWithInterest, setTotalPaymentWithInterest] = useState(0);

    const handleLoanAmountChange = (e) => {
        const amount = parseFloat(e.target.value);
        if (!isNaN(amount)) {
            setLoanAmount(amount);
            calculateLoan(amount, loanTerm, interestRate);
        }
    };

    const handleLoanTermChange = (e) => {
        const term = parseFloat(e.target.value);
        if (!isNaN(term)) {
            setLoanTerm(term);
            calculateLoan(loanAmount, term, interestRate);
        }
    };

    const handleInterestRateChange = (e) => {
        const rate = e.target.value;
        if (!isNaN(rate)) {
            setInterestRate(rate);
            calculateLoan(loanAmount, loanTerm, rate);
        }
    };

    const calculateLoan = (amount, term, rate) => {
        const principal = parseFloat(amount);
        const monthlyRate = parseFloat(rate) / 100 / 12; // Convert annual interest rate to monthly
        const months = parseFloat(term);
    
        // Calculate EMI using the formula
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    
        // Update state with the calculated EMI
        setMonthlyEMI(emi.toFixed(2));

        // Calculate total payment with interest
        const totalPayment = emi * months;
        setTotalPaymentWithInterest(totalPayment.toFixed(2));
    };

    return (
        <div>

   
        <section className="section dark-theme h__mb60 container-fluid text-center" style={{padding:"30px"}}>
            <h1 className="section__ttl">EMI Calculator</h1>
            <p className="section__desc h__mb30">Select the various details of your preferred bike loan such as Principal Amount, Interest Rate, Loan Term, Loan Processing fee with your preferred mode of EMI payment. The break-ups of Total Amount Payable and Loan Pay-Off Period are graphically listed. Click on any portion of the graph to view its details. The Starting Balance, Principal, Interest and Ending Balance for the entire tenure is represented as an Amortization Table. Click the “Apply Loan” button to begin the process of availing your  loan.</p>
            <form id="emicalcalulatorform ">
                <div className="section__card grid grid-2 grid__gap60 row">
                    <div className="grid_12 col-lg-6">
                        <fieldset className="input__field input h__mb50">
                            <div className="grid-flex grid-sb h__mb15">
                                <label className="input__label">Loan Amount</label>
                                <div className="input input--prefix input--border">
                                    <input className="input__control" id="loanamount" value={loanAmount} maxLength="7" type="number" onChange={handleLoanAmountChange} />
                                    {/* <span className="input__prefix">&#8377;</span> */}
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="input__field input h__mb50">
                            <div className="grid-flex grid-sb h__mb15">
                                <label className="input__label">Loan Term</label>
                                <div className="emi-calc__val">
                                    <input className="input__control" id="loanterm" value={loanTerm} maxLength="7" type="number" onChange={handleLoanTermChange} />
                                    {/* <span className="input__prefix">Months</span> */}
                                    {/* <span className="input__bar"></span> */}
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="input__field input">
                            <div className="grid-flex grid-sb h__mb15">
                                <label className="input__label">Interest Rate <em>(Per/Annum)</em></label>
                                <div className="input input--prefix input--border">
                                    <input className="input__control" id="loaninterest" maxLength="5" value={interestRate} type="number" onChange={handleInterestRateChange} />
                                    {/* <span className="input__prefix">%</span> */}
                                    {/* <span className="input__bar"></span> */}
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-lg-6">
                        <ul className="emi-calc__list grid grid-3">
                            <li className="emi-calc__list-item h__ac">
                                <div className="emi-calc__list-label h__mb15 text-uppercase">Loan Amount</div>
                                <div className="emi-calc__list-val">&#8377; <span className="js-result-principal" id="principal">{loanAmount}</span></div>
                            </li>
                            <li className="emi-calc__list-item h__ac">
                                <div className="emi-calc__list-label h__mb15 text-uppercase">Interest Payable</div>
                                <div className="emi-calc__list-val">&#8377; <span className="js-result-interest" id="interest_payable">{(monthlyEMI * loanTerm - loanAmount).toFixed(2)}</span></div>
                            </li>
                            <li className="emi-calc__list-item h__ac">
                                <div className="emi-calc__list-label h__mb15 text-uppercase">Total loan payment</div>
                                <div className="emi-calc__list-val">&#8377; <span className="js-result-amount" id="total_payment">{totalPaymentWithInterest}</span></div>
                            </li>
                        </ul>
                        <div className="grid-flex grid-ar h__mb30">
                            <div className="emi-calc__emiblock h__ac">
                                <div className="emi-calc__emi text-uppercase h__mb10">EMI</div>
                                <div className="emi-calc__smtxt">Per / Month</div>
                            </div>
                            <div className="emi-calc__emiblock">
                                <div className="emi-calc__totalamt h__mb10">&#8377; <span className="js-result-emi" id="monthly_emi">{monthlyEMI}</span></div>
                            </div>
                        </div>
                        <div>
                            <Link className='link'>
                        <p className='book-now '>Enquiry Now</p> 
                            
                            </Link>
                        </div>
                   
                    </div>
                </div>
            </form>
        </section>
        </div>

    );
};

export default EmiCalculator;
