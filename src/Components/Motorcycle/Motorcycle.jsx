import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/Motorcycle/Scrambler-motorcycle.png';
import img2 from '../assets/Motorcycle/Roadster-motorcycle.png';
import img3 from '../assets/Motorcycle/Adventure-motocycle.png';
import { FiChevronRight } from "react-icons/fi";
import { HiArrowNarrowRight, HiChevronDown, HiChevronUp } from "react-icons/hi";

export default function Motorcycle() {
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
              { img: img1, texthead:"Scrambler", text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Scrambler" },
              { img: img2,  texthead:"Roadster",  text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Roadster" },
              { img: img3,  texthead:"Adventure",  text: "A masterpiece in chrome. With more heart, more soul. Meet the all new Adventure" },
             
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
