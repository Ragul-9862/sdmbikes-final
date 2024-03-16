import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft, FiX } from "react-icons/fi";
import jawa from '../Components/assets/Navbar/jawa.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState(window.location.pathname); 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Address1: '',
    Address2: '',
    Date: '',
    Model: '',
    State: '',
    Ride: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false); 

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    const formEle = e.target;
    

    const formDatab = new FormData(formEle);
    
   
    fetch(
      "https://script.google.com/macros/s/AKfycbwbx7tvxuXNUKdzAyT-RwsLbplr0qRi7DHkYLwNfFeumUmMeOvBJBLSN0WOLoj-ptjDYQ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        return res.text();
      })
      .then((data) => {
        console.log(data); 
      
        if (data.includes("Your message was successfully sent to the Googlesheet database!")) {
        
          setSubmitted(true);
          setFormData({
            Name: '',
            Email: '',
            Phone: '',
            Address1: '',
            Address2: '',
            Date: '',
            Model: '',
            State: '',
            Ride: '',
          });
        } else {
    
          throw new Error('Unexpected response from server');
        }
      })
      .catch((error) => {
        console.error(error); 
     
      });
  };
  

  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">

          <button
            className={`navbar-toggler order-lg-0 ${toggle ? "" : "collapsed"}`}
            onClick={handleToggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={toggle ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            {toggle ? <FiX className='hamberger' /> : <FiAlignLeft className='hamberger' />}
          </button>
          <div className="navbar-brand-container d-flex justify-content-center justify-content-lg-start flex-grow-1 order-lg-1">
            <Link to="/">
              <a className="navbar-brand ms-lg-3" href="#home">
                <img src={require("../Components/assets/Navbar/logo.png")} className='logo' alt='logo' />
              </a>
            </Link>
          </div>
          <div className={`collapse navbar-collapse ${toggle ? "show" : ""} justify-content-lg-end order-lg-2`} id="navbarNav">
          <ul className="navbar-nav me-auto">
          <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
            <Link className='link' to="/" onClick={() => handleLinkClick('/')}>
              <a className="nav-link" href="#home">Home</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Motorcycle' ? 'active' : ''}`}>
            <Link className='link' to="/Motorcycle" onClick={() => handleLinkClick('/Motorcycle')}>
              <a className="nav-link" href="#link">Motorcycles</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/EmiCalculator' ? 'active' : ''}`}>
            <Link className='link' to="/EmiCalculator" onClick={() => handleLinkClick('/EmiCalculator')}>
              <a className="nav-link" href="#link">Emi Calculator</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Kommuniti' ? 'active' : ''}`}>
            <Link className='link' to="/Kommuniti" onClick={() => handleLinkClick('/Kommuniti')}>
              <a className="nav-link" href="#about">Kommuniti</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Contactus' ? 'active' : ''}`}>
            <Link className='link' to="/Contactus" onClick={() => handleLinkClick('/Contactus')}>
              <a className="nav-link" href="#about">Contact Us</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" id='book-a-test-ride' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Book a Test Drive</a>
          </li>
        </ul>
          </div>
        </div>
        {(windowWidth >= 992) && (
          <Link to="/HomePageJawa">
            <img src={require("../Components/assets/Navbar/jawa.png")} alt="logo" className='d-none d-lg-block jawa' />
          </Link>
        )}
         {(windowWidth < 992) && (
        <div style={{ position: "relative", textDecoration: "none" }}>
          <Link to='/HomePageJawa'>
            <img className={`md-logo ${toggle ? 'position-top' : ''}`} src={jawa} alt="" />
          </Link>
        </div>
      )}
      </nav>

 
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
          </button>
        </div>
        <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="selectModel" className="form-label">Select Model</label>
              <select
                className="form-select"
                id="selectModel"
                value={formData.Model}
                onChange={handleChange}
                name="Model"
                required
              >
                <option value="Scrambler">Scrambler</option>
                <option value="Roadster">Roadster</option>
                <option value="Adventure">Adventure</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="selectState" className="form-label">Select State</label>
              <select
                className="form-select"
                id="selectState"
                value={formData.State}
                onChange={handleChange}
                name="State"
                required
              >
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>
      
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Select Date for Test Ride</label>
              <input
                type="date"
                className="form-control test-drive"
                id="date"
                value={formData.Date}
                onChange={handleChange}
                name="Date"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control test-drive"
                id="fullName"
                value={formData.Name}
                onChange={handleChange}
                name="Name"
                required
              />
              {errors.Name && <p className="text-danger">{errors.Name}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control test-drive"
                id="email"
                value={formData.Email}
                onChange={handleChange}
                name="Email"
                required
              />
              {errors.Email && <p className="text-danger">{errors.Email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control test-drive"
                id="phone"
                value={formData.Phone}
                onChange={handleChange}
                name="Phone"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address1" className="form-label">Address line 1</label>
              <input
                type="text"
                className="form-control test-drive"
                id="address1"
                value={formData.Address1}
                onChange={handleChange}
                name="Address1"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address2" className="form-label">Address line 2</label>
              <input
                type="text"
                className="form-control test-drive"
                id="address2"
                value={formData.Address2}
                onChange={handleChange}
                name="Address2"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="book-now" disabled={submitting}>
                {submitting ? "Submitting..." : "BOOK TEST RIDE"}
              </button>
            </div>
            {submitted && (
              <p className="text-success">Thanks for contacting us!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
