import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import { FiChevronRight } from "react-icons/fi";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const [state, handleSubmit] = useForm("xoqgljzk");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      await handleSubmit(e);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setFormErrors({
        name: '',
        email: '',
        message: ''
      });
    } else {
      setFormErrors(validationErrors);
    }
  };

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
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>
              <div className="form-group">
                <textarea id="message" name="message" className="form-control" rows="5" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>
              {submitted ? (
                <p>Thanks for contacting us!</p>
              ) : (
                <button type="submit" className="book-now" disabled={state.submitting}>
                  {state.submitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </form>
          </div>
          <div className="col-lg-6 contactus-info">
            <h2>Visit Us</h2>
            <p>123 Jawa Street</p>
            <p>Jawa City, India</p>
            <h3>Phone:</h3>
            <p> +91 98765 43210</p>
            <h3>Email:</h3>
            <p>info@shreedhanammotors.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
