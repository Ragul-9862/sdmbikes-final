import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

const EmiCalculator = () => {
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
        const rate = e.target.value;
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
        <div className='h__mb60'>
            <Link className='link' to='/'>
                <p className='back-page'>
                    Home <span><FiChevronRight/></span> Emi Calculator
                </p>
            </Link>
            <section className="section dark-theme h__mb60 container text-center" style={{ padding: "30px" }}>
                <h1 className="section__ttl">EMI Calculator</h1>
                <p className="section__desc h__mb30">Select the various details of your preferred bike loan such as Principal Amount, Interest Rate, Loan Term, Loan Processing fee with your preferred mode of EMI payment. The break-ups of Total Amount Payable and Loan Pay-Off Period are graphically listed. Click on any portion of the graph to view its details. The Starting Balance, Principal, Interest and Ending Balance for the entire tenure is represented as an Amortization Table. Click the “Apply Loan” button to begin the process of availing your loan.</p>
                <form id="emicalcalulatorform">
                    <div className="section__card grid grid-2 grid__gap60 row">
                        <div className="grid_12 col-lg-6">
                            <fieldset className="input__field input">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Down Payment</label>
                                    <div className="input input--prefix input--border d-flex">
                                        <input type="range" className="input__control" id="downpayment" name="downPayment" value={downPayment} max="100000" step="5000" onChange={handleDownPaymentChange}  style={{ backgroundColor: 'red' }}  />
                                        <span>{downPayment}</span>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input h__mb50">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Loan Amount</label>
                                    <div className="input input--prefix input--border  d-flex">
                                        <input type="range" className="input__control" id="loanamount" name="loanAmount" value={loanAmount} max="1000000" step="50000" onChange={handleLoanAmountChange} />
                                        <span>{loanAmount}</span>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input h__mb50">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Loan Term</label>
                                    <div className="emi-calc__val  d-flex">
                                        <input type="range" className="input__control" id="loanterm" name="loanTerm" value={loanTerm} min="12" max="36" step="12" onChange={handleLoanTermChange}/>
                                        <span>{loanTerm} Months</span>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Interest Rate <em>(Per/Annum)</em></label>
                                    <div className="input input--prefix input--border d-flex">
                                        <input type="range" className="input__control" id="loaninterest" name="interestRate" value={interestRate} max="30" onChange={handleInterestRateChange} />
                                        <span>{interestRate}</span>
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
                                    <div className="emi-calc__list-val">&#8377; <span className="js-result-interest" id="interest_payable">{((monthlyEMI * loanTerm) - (loanAmount - downPayment)).toFixed(2)}</span></div>
                                </li>
                                <li className="emi-calc__list-item h__ac">
                                    <div className="emi-calc__list-label h__mb15 text-uppercase">Total loan payment</div>
                                    <div className="emi-calc__list-val">&#8377; <span className="js-result-amount" id="total_payment">{totalPaymentWithInterest}</span></div>
                                </li>
                            </ul>
                            <div className="grid-flex grid-ar h__mb30">
                                <div className="emi-calc__emiblock h__ac">
                                    <div className="emi-calc__list-label h__mb15 text-uppercase">EMI</div>
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
