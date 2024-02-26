import React from 'react';
import nomads from '../assets/Motorcycle/Kommuniti/kogo-trails-banner.jpeg';
import blogs from '../assets/Motorcycle/Kommuniti/nomads-banner.jpg';
import rides from '../assets/Motorcycle/Kommuniti/nomads-banner.jpg';
import clubs from '../assets/Motorcycle/Kommuniti/Blogs.jpg';
import mechanic from '../assets/Motorcycle/Kommuniti/mechanic.jpg';
import { Link } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";
// import EMICalculator from './Emi';


export default function Kommuniti() {

  const kommuniti = [
    { id: 1, img: nomads, text: "JAWA YEZDI NOMADS" },
    { id: 2, img: blogs, text: "BLOGS" },
    { id: 3, img: rides, text: "JAWA YEZDI RIDES" },
    { id: 4, img: clubs, text: "JAWA & YEZDI MOTORCYCLE CLUBS OF INDIA" },
    { id: 5, img: mechanic, text: "FIND A MECHANIC" },
  ];

  return (
    <div>
 
    <section>
   
      <div className='container-fluid kommuniti'>
      <Link className='link' to='/'>
              <p className='back-page'>
                Home <span><FiChevronRight/></span> Kommuniti
              </p>
            </Link>
        <div className='container'>
        <div className='row kommuniti-main text-center '>
          <h2>THE KOMMUNITI</h2>
          <p>Relive the road trips, find your fellow riders, or swap some spares.
          Enjoy the journey as a part of the vibrant Jawa Kommuniti.</p>
        </div>
        <div className='row'>
          {kommuniti.map((item) =>
            <div className='col-lg-6' key={item.id}>
              <div className="img-container ">
                <img src={item.img} className='img-fluid w-100' style={{height:"300px"}} alt={item.text} />
              </div>
              <h2 className='img-containers'>{item.text}</h2>
            </div>
          )}
        </div>
        </div>
        
      </div>
    </section>

    {/* <section>
        <EMICalculator/>
    </section> */}
         
    </div>
  );
}