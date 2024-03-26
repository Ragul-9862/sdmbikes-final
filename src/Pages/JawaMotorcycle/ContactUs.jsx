import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false); 

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
      errors.name = "Name is required";
    }
    if (!formData.Email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.Email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.Message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true); 
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const formEle = e.target;
      const formDatab = new FormData(formEle);
      fetch(
        "https://script.google.com/macros/s/AKfycbzgJZW0sm5kxClvOWOUJOksiQq7-UHXn39z7I82IOieCTggsK-1iOI7BP-25wg5UafB4Q/exec",
        {
          method: "POST",
          body: formDatab
        }
      )
        .then((res) => {
          return res.text().then(text => {
            console.log("Response from server:", text);
            return text;
          });
        })
        .then((data) => {
          console.log("Data from server:", data);
          setSubmitted(true);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setSubmitting(false);
        });
    } else {
      setErrors(validationErrors);
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-us">
      <NavLink className='link' to='/'>
        <p className='back-page'>
          Home <span><FiChevronRight/></span> ContactUs
        </p>
      </NavLink>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 contact-uss">
            <h2>Contact Us</h2>
            <p>If you have any questions or inquiries, feel free to contact us using the form below.</p>
            {submitted ? (
              <div>
                <p>Thank you for contacting us!</p>
              </div>
            ) : (
              <form className="contact-form" method='POST' onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" id="name"  name="Name" className="form-control" placeholder="Your Name" value={formData.Name} onChange={handleChange} />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input type="email" id="email" name="Email" className="form-control" placeholder="Your Email" value={formData.Email} onChange={handleChange} />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <textarea id="message" name="Message" className="form-control" rows="5" placeholder="Message" value={formData.Message} onChange={handleChange}></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                <button type="submit" className="book-now-contact" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
              </form>
            )}
          </div>
          <div className="col-lg-6 col-md-6 contactus-info">
            <h2>Visit Us</h2>
            <p>1420-B, sathy main road, </p>
            <p>ganapathy, coimbatore - 641035</p>
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
