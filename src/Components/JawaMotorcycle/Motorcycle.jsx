import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Navbar/jawa-350.png';
import img2 from '../assets/Navbar/42.png';
import img3 from '../assets/Navbar/Perak.png';
import img4 from '../assets/Navbar/42-bobber.png';
import { FiChevronRight } from "react-icons/fi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function JMotorcycle() {
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const toggleContent = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
  
 <div className='motorcycle-main'>
    <Link className='link' to='/'>
              <p className='back-page mt-4'>
                Home <span><FiChevronRight/></span> Motorcycle
              </p>
            </Link>
      <section className='motorcycles'>
        <div className="container text-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 motorcycle-main-info">
              <h2>JAWA MOTORCYCLES</h2>
              <p>
              Embracing the spirit of innovation, the Yezdi narrative is woven by a dedicated community of motorcycle enthusiasts who envisioned the limitless potential of two-wheelers and the transformative influence they could wield in people's lives. However, the Yezdi expedition is an ongoing saga. The concluding chapter is still unwritten, fueled by our unyielding thirst for innovation. We persist in dreaming, challenging conventions, and consistently pondering the question, 'What could a motorcycle be?'
              </p>
            </div>
          </div>
          <div className="row">
            {[
              { img: img1, texthead:"Jawa-350", text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Jawa-350" },
              { img: img2,  texthead:"42",  text: "A masterpiece in chrome. With more heart, more soul. Meet the all new 42" },
              { img: img3,  texthead:"42-bobber",  text: "A masterpiece in chrome. With more heart, more soul. Meet the all new 42-bobber" },
              { img: img4,  texthead:"Perak",  text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Perak" },
             
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
                {/* <a className="yezdi-details" href="">
                  Book Online <span> <HiArrowNarrowRight /></span>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

   
  );
}