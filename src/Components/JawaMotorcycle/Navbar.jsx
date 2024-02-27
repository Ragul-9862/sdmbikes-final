import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft, FiX } from "react-icons/fi";
import yezdi from '../assets/Navbar/yezdi.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            <Link to="/">
              <a className="navbar-brand ms-lg-5" href="#home">
                <img src={require("../assets/Navbar/logo.png")} className='logo' alt='logo' />
              </a>
            </Link>
          </div>
          <div className={`collapse navbar-collapse ${toggle ? "show" : ""} justify-content-lg-end order-lg-2`} id="navbarNav">
            <ul className="navbar-nav me-auto">
              <Link className='link' to="/" >
                <li className="nav-item j-nav">
                  <a className="nav-link" href="#home">Home</a>
                </li>
              </Link>
              <li className="nav-item j-nav ">
                <Link className='link' to="/MotorcycleJawa">
                  <a className="nav-link" href="#link">Motorcycles</a>
                </Link>
              </li>
              <li className="nav-item j-nav">
                <Link className='link ' to="/EmiCalculator">
                  <a className="nav-link" href="#link">Emi Calculator</a>
                </Link>
              </li>
              <Link className='link' to="/Kommuniti">
                <li className="nav-item j-nav">
                  <a className="nav-link " href="#about">Kommuniti</a>
                </li>
              </Link>
              <Link className='link' to="/Contactus">
                <li className="nav-item j-nav ">
                  <a className="nav-link " href="#about">Contact Us</a>
                </li>
              </Link>
              <li className="nav-item j-nav">
                <a className="nav-link " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Book a Test Drive</a>
              </li>
            </ul>
          </div>
        </div> 
        {(windowWidth >= 992) && (
          <Link to="/HomePageJawa">
            <img src={require("../assets/Navbar/yezdi.png")} alt="logo" className='d-none d-lg-block jawa' />
          </Link>
        )}
         {(windowWidth < 992) && (
        <div style={{ position: "relative", textDecoration: "none" }}>
          <Link to='/HomePageJawa'>
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
  <form>
    <div className="mb-3">
      <label htmlFor="selectModel" className="form-label">Select Model</label>
      <select className="form-select" id="selectModel">
        <option value="model1">Jawa 350</option>
        <option value="model2">42</option>
        <option value="model2">42 Bobber</option>
        <option value="model2">Perak</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="selectState" className="form-label">Select State</label>
      <select className="form-select" id="selectState">
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
        <input className="form-check-input" type="radio" name="rideLocation" id="Home" value="Home" />
        <label className="form-check-label" htmlFor="Home">Home</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="rideLocation" id="Office" value="Office" />
        <label className="form-check-label" htmlFor="Office">Office</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="rideLocation" id="Dealership" value="Dealership" />
        <label className="form-check-label" htmlFor="Dealership">Dealership</label>
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="date" className="form-label">Select Date for Test Ride</label>
      <input type="date" className="form-control test-drive" id="date" />
    </div>
    <div className="mb-3">
      <label htmlFor="fullName" className="form-label">Full Name</label>
      <input type="text" className="form-control test-drive" id="fullName" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control test-drive" id="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">Phone Number</label>
      <input type="tel" className="form-control test-drive" id="phone" />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address line 1</label>
      <input type="text" className="form-control test-drive" id="address" />
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label">Address line 2</label>
      <input type="text" className="form-control test-drive" id="address" />
    </div>
    <div className="d-grid">
      <button type="button" className="book-now">BOOK TEST RIDE</button>
    </div>
  </form>
</div>

      </div>
    </section>
  );
}
