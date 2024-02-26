import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Motorcycle/Scrambler-motorcycle.png';
import img2 from '../assets/Motorcycle/Roadster-motorcycle.png';
import img3 from '../assets/Motorcycle/Adventure-motocycle.png';
import { FiChevronRight } from "react-icons/fi";
import { HiArrowNarrowRight, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FiX } from "react-icons/fi";


export default function Motorcycle() {
  const [expanded, setExpanded] = useState([false, false, false]);
  const [showForm, setShowForm] = useState(false);

  const toggleContent = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const handleEnquiryClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='motorcycle-main'>
      <Link className='link' to='/'>
        <p className='back-page mt-4'>
          Home <span><FiChevronRight /></span> Motorcycle
        </p>
      </Link>
      <section className='motorcycle'>
        <div className="container text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 motorcycle-main-info">
              <h2>YEZDI MOTORCYCLES</h2>
              <p>
                Embracing the spirit of innovation, the Yezdi narrative is woven by a dedicated community of motorcycle enthusiasts who envisioned the limitless potential of two-wheelers and the transformative influence they could wield in people's lives. However, the Yezdi expedition is an ongoing saga. The concluding chapter is still unwritten, fueled by our unyielding thirst for innovation. We persist in dreaming, challenging conventions, and consistently pondering the question, 'What could a motorcycle be?'
              </p>
            </div>
          </div>
          <div className="row">
            {[
              { img: img1, texthead: "Scrambler", text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Scrambler" },
              { img: img2, texthead: "Roadster", text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Roadster" },
              { img: img3, texthead: "Adventure", text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Adventure" },

            ].map((item, index) => (
              <div key={index} className="col-lg-6 motorcycle-img">
                <img src={item.img} alt={`img-${index + 1}`} className="img-fluid yezdi-img" />
                <h5>{item.texthead}</h5>
                <p className="yezdi-img-info">
                  {expanded[index] ? item.text : `${item.text.slice(0, 80)}...`}
                  {expanded[index] && <br />}
                  <span onClick={() => toggleContent(index)} className="read-more-link">
                    {expanded[index] ? " Read Less" : " Read More"} {expanded[index] ? <HiChevronUp /> : <HiChevronDown />}
                  </span>
                </p>
                <button className="yezdi-details" onClick={handleEnquiryClick}>
                  Enquiry Now <span> <HiArrowNarrowRight /></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ">
          <div className="modal-bg" onClick={handleCloseForm}></div>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-body">
                <form className='popup-form'>
                  <div className="modal-header">
                    <h5 className="modal-title">Enquiry Form</h5>

                    <FiX aria-label="Close" className='btn-closed' onClick={handleCloseForm} />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder='Name' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Phone No</label>
                    <input type="text" className="form-control" id="name" placeholder='Phone No' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Email Address' />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="selectModel" className="form-label">Select Model</label>
                    <select className="form-select" id="selectModel">
                      <option value="model1">Scrambler</option>
                      <option value="model2">Roadster</option>
                      <option value="model2">Adventure</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="3" placeholder='Messsage here.......'></textarea>
                  </div>
                  <div className='submit-btn'>
                  <button type="submit" className="btn btn-danger ">Submit</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
