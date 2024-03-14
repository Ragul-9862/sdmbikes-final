import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft, FiX } from "react-icons/fi";
import yezdi from '../assets/Navbar/yezdi.png';

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

  const validateForm = () => {
    let errors = {};
    if (!formData.Name.trim()) {
      errors.Name = "Name is required";
    }
    if (!formData.Email.trim()) {
      errors.Email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      errors.Email = "Invalid email address";
    }
    if (!formData.Ride) {
      errors.Ride = "Where do you want to have Your Test Ride?";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    
    // Access the form element using the event object
    const formEle = e.target;
    
    // Create FormData from the form element
    const formDatab = new FormData(formEle);
    
    // Fetch request
    fetch(
      "https://script.google.com/macros/s/AKfycbwdS_x3BrsiH8nt8xtN5k2MFiJk8ByMd4h6cUHQuxNtBDR0HMbzjfmgtObCvt3BDTvfZw/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        // Return the response text
        return res.text();
      })
      .then((data) => {
        console.log(data); // Log response data
        // Check if the response contains "Your message was successfully sent to the Googlesheet database!"
        if (data.includes("Your message was successfully sent to the Googlesheet database!")) {
          // If so, set submitted state to true and clear form data
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
          // If not, log an error
          throw new Error('Unexpected response from server');
        }
      })
      .catch((error) => {
        console.error(error); // Log any errors
        // Handle error state here if needed
      });
  };

  return (
    <section>
      <nav className="navbar navbar-expand-lg fixed-top" id='fixed-top-2'>
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
            {toggle ? <FiX className='hamberger' id='hamberger' /> : <FiAlignLeft className='hamberger' id='hamberger' />}
          </button>
          <div className="navbar-brand-container d-flex justify-content-center justify-content-lg-start flex-grow-1 order-lg-1">
            <Link to="/HomePageJawa">
              <a className="navbar-brand ms-lg-5" href="#home">
                <img src={require("../assets/Navbar/logo.png")} className='logo' alt='logo' />
              </a>
            </Link>
          </div>
          <div className={`collapse navbar-collapse ${toggle ? "show" : ""} justify-content-lg-end order-lg-2`} id="navbarNav">
            <ul className="navbar-nav me-auto">
            <li className={`nav-item ${activeLink === '/Home' ? 'actives' : ''}`}>
            <Link className='link' to="/HomePageJawa" onClick={() => handleLinkClick('/')}>
              <a className="nav-link" href="#home">Home</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Motorcycle' ? 'actives' : ''}`}>
            <Link className='link' to="/MotorcycleJawa" onClick={() => handleLinkClick('/Motorcycle')}>
              <a className="nav-link" href="#link">Motorcycles</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/EmiCalculator' ? 'actives' : ''}`}>
            <Link className='link' to="/EmiCalculatorPageJawa" onClick={() => handleLinkClick('/EmiCalculator')}>
              <a className="nav-link" href="#link">Emi Calculator</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Kommuniti' ? 'actives' : ''}`}>
            <Link className='link' to="/KommunitiPageJawa" onClick={() => handleLinkClick('/Kommuniti')}>
              <a className="nav-link" href="#about">Kommuniti</a>
            </Link>
          </li>
          <li className={`nav-item ${activeLink === '/Contactus' ? 'actives' : ''}`}>
            <Link className='link' to="/ContactusPageJawa" onClick={() => handleLinkClick('/Contactus')}>
              <a className="nav-link" href="#about">Contact Us</a>
            </Link>
          </li>
              <li className="j-nav">
                <a className="nav-link " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Book a Test Drive</a>
              </li>
            </ul>
          </div>
        </div>
        {(windowWidth >= 992) && (
          <Link to="/">
            <img src={require("../assets/Navbar/yezdi.png")} alt="logo" className='d-none d-lg-block jawa' />
          </Link>
        )}
        {(windowWidth < 992) && (
          <div style={{ position: "relative", textDecoration: "none" }}>
            <Link to='/'>
              <img className={`md-logo ${toggle ? 'position-top' : ''}`} src={yezdi} alt="" />
            </Link>
          </div>
        )}
      </nav>


      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasRightLabel">Book a Test Drive</h5> */}
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
              >
                <option value="Jawa 350">Jawa 350</option>
                <option value="42">42</option>
                <option value="42 Bobber">42 Bobber</option>
                <option value="Perak">Perak</option>
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
              <label className="form-check-label d-block">Where do you want to have Your Test Ride?</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Home"
                  value="Home"
                  checked={formData.Ride === 'Home'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Home">Home</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Office"
                  value="Office"
                  checked={formData.Ride === 'Office'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Office">Office</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Dealership"
                  value="Dealership"
                  checked={formData.Ride === 'Dealership'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Dealership">Dealership</label>
              </div>
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
              />
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
              />
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
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="book-now">BOOK TEST RIDE</button>
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
