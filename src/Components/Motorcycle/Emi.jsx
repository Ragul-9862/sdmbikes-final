import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";


const EmiCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [monthlyEMI, setMonthlyEMI] = useState('');
    const [totalPaymentWithInterest, setTotalPaymentWithInterest] = useState('');
    const [downPayment, setDownPayment] = useState('');

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
            setMonthlyEMI('');
            setTotalPaymentWithInterest('');
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
                                    <div className="input input--prefix input--border">
                                        <input className="input__control" id="downpayment" name="downPayment" value={downPayment} maxLength="7" type="text" onChange={handleDownPaymentChange} />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input h__mb50">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Loan Amount</label>
                                    <div className="input input--prefix input--border">
                                        <input className="input__control" id="loanamount" name="loanAmount" value={loanAmount} maxLength="7" type="text" onChange={handleLoanAmountChange} />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input h__mb50">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Loan Term</label>
                                    <div className="emi-calc__val">
                                        <select className="input__control" id="loanterm" name="loanTerm" value={loanTerm} onChange={ handleLoanTermChange}>
                                            <option value="">Select Term</option>
                                            <option value="12">12 Months</option>
                                            <option value="24">24 Months</option>
                                            <option value="36">36 Months</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="input__field input">
                                <div className="grid-flex grid-sb h__mb15">
                                    <label className="input__label">Interest Rate <em>(Per/Annum)</em></label>
                                    <div className="input input--prefix input--border">
                                        <input className="input__control" id="loaninterest" name="interestRate" maxLength="5" value={interestRate} type="text" onChange={ handleInterestRateChange } />
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
