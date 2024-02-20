import React from 'react';
import { Link } from 'react-scroll';

const Highlights = () => {
  return (
    <div>
      <section className='highlights container'>
        <h2>Key <span>Highlights</span></h2>
        <div className='highlights-main'>
          <Link
            to="your-target-element-id" // Replace with the actual ID of your target element
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500} // Duration of the scroll animation
            className="scroll-link"
          >
            {/* Scroll to Highlights */}
          </Link>
          {/* Add your images here */}
          <img src={require("../Components/assets/Key-highlights/Key-highlights-1.png")} className='img-fluid' alt="Highlight 1" />
          <img src={require("../Components/assets/Key-highlights/Key-highlights-2.png")} className='img-fluid' alt="Highlight 2" />
          <img src={require("../Components/assets/Key-highlights/Key-highlights-3.png")} className='img-fluid' alt="Highlight 3" />
          <img src={require("../Components/assets/Key-highlights/Key-highlights-4.png")} className='img-fluid' alt="Highlight 4" />
        </div>
      </section>
    </div>
  );
};

export default Highlights;
