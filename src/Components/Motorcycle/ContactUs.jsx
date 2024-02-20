import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

export default function ContactUs() {
  return (
    <section className="contact-us">
         <Link className='link' to='/'>
         <p className='back-page'>
                Home <span><FiChevronRight/></span> ContactUs
              </p>
            </Link>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 contact-uss">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us using the form below.</p>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" className="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="book-now">Submit</button>
            </form>
          </div>
          <div className="col-lg-6 contactus-info">
            <h2>Visit Us</h2>
            <p>123 Jawa Street</p>
            <p>Jawa City, India</p>
            <h3>Phone:</h3>
            <p>+91 123 456 7890</p>
            <h3>Email:</h3>
            <p>info@jawamotorcycles.com</p>
          </div>
        </div>
        {/* <div className='row mt-5'>
          <div className='col-lg-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.779657500296!2d76.97047327603333!3d11.023997938145445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8597229082379%3A0xa05c486340ffa872!2sCLOUD%20DREAMS!5e0!3m2!1sen!2sin!4v1707934439637!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> */}
      </div>
    </section>
  );
}