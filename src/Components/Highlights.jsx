// Highlights.js
import React from 'react';
import { Link } from 'react-scroll';
import HighlightImage1 from '../Components/assets/Key-highlights/Key-highlights-1.png';
import HighlightImage2 from '../Components/assets/Key-highlights/Key-highlights-2.png';
import HighlightImage3 from '../Components/assets/Key-highlights/Key-highlights-3.png';
import HighlightImage4 from '../Components/assets/Key-highlights/Key-highlights-4.png';
import HighlightImage5 from '../Components/assets/Key-highlights/Key-highlights-5.png';
import HighlightImage6 from '../Components/assets/Key-highlights/Key-highlights-6.png';
import HighlightImage7 from '../Components/assets/Key-highlights/Key-highlights-7.png';
import HighlightImage8 from '../Components/assets/Key-highlights/Key-highlights-8.png';
import HighlightImage9 from '../Components/assets/Key-highlights/Key-highlights-9.png';
import HighlightImage10 from '../Components/assets/Key-highlights/Key-highlights-10.png';
import HighlightImage11 from '../Components/assets/Key-highlights/Key-highlights-11.png';
import HighlightImage12 from '../Components/assets/Key-highlights/Key-highlights-12.png';

const Highlights = ({ selectedEvent1, selectedEvent2, selectedEvent3 }) => {
  let startIndex, endIndex;
  switch (selectedEvent1 || selectedEvent2 || selectedEvent3) {
    case 'event1':
      startIndex = 1;
      endIndex = 4;
      break;
    case 'event2':
      startIndex = 5;
      endIndex = 8;
      break;
    case 'event3':
      startIndex = 9;
      endIndex = 12;
      break;
    default:
      startIndex = 1;
      endIndex = 4;
  }

  const renderHighlights = () => {
    const highlights = [];
    for (let i = startIndex; i <= endIndex; i++) {
      switch (i) {
        case 1:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage1}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 2:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage2}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 3:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage3}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 4:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage4}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 5:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage5}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 6:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage6}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 7:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage7}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 8:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage8}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 9:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage9}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 10:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage10}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 11:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage11}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        case 12:
          highlights.push(
            <img
              key={`highlight-${i}`}
              src={HighlightImage12}
              className='img-fluid'
              alt={`Highlight ${i}`}
            />
          );
          break;
        default:
          break;
      }
    }
    return highlights;
  };

  return (
    <div>
      <section className='highlights container'>
        <h2>Key <span>Highlights</span></h2>
        <div className='highlights-main'>
          <Link
            to="your-target-element-id"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            className="scroll-link"
          >
            {/* Scroll to Highlights */}
          </Link>
          {renderHighlights()}
        </div>
      </section>
    </div>
  );
};

export default Highlights;
