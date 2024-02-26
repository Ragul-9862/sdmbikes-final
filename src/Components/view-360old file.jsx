import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Highlights from '../Components/Highlights';



export default function New() {

  // <------------Scrambler------------------------------->

  const [number, setNumber] = useState(1);
  const BikeBoldBlack = require(`../Components/assets/j-bike/bike-${number}.png`)


  // <------------Scrambler Midnightblue------------------------------->
  const [number12, setNumber12] = useState(1);
  const BikeMidnightBlue = require(`../Components/assets/j-bike/Scrambler-midnight-blue/bike-${number12}.png`)


  const handleDecrease12 = () => {
    setNumber12((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease12 = () => {
    setNumber12((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler FireOrange------------------------------->
  const [number13, setNumber13] = useState(1);
  const BikeFireOrange = require(`../Components/assets/j-bike/Scrambler-fireorange/bike-${number13}.png`)


  const handleDecrease13 = () => {
    setNumber13((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease13 = () => {
    setNumber13((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler MeenGreen------------------------------->
  const [number14, setNumber14] = useState(1);
  const BikeMeanGreen = require(`../Components/assets/j-bike/Scrambler-meengreen/bike-${number14}.png`)


  const handleDecrease14 = () => {
    setNumber14((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease14 = () => {
    setNumber14((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler Outlaw Olive------------------------------->
  const [number15, setNumber15] = useState(1);
  const BikeOutlawOlive = require(`../Components/assets/j-bike/Scrambler-OutlawOlive/bike-${number15}.png`)


  const handleDecrease15 = () => {
    setNumber15((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease15 = () => {
    setNumber15((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler RebelRed------------------------------->
  const [number16, setNumber16] = useState(1);
  const BikeRebelRed = require(`../Components/assets/j-bike/Scrambler-RebelRed/bike-${number16}.png`)


  const handleDecrease16 = () => {
    setNumber16((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease16 = () => {
    setNumber16((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler YellingYellow------------------------------->
  const [number17, setNumber17] = useState(1);
  const BikeYellingYellow = require(`../Components/assets/j-bike/Scrambler-YellingYellow/bike-${number17}.png`)


  const handleDecrease17 = () => {
    setNumber17((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease17 = () => {
    setNumber17((prevNumber) => Math.min(16, prevNumber + 1));
  };



  const [number2, setNumber2] = useState(1);
  const BikeShodowGrey = require(`../Components/assets/j-bike/Roadster/Roadster-ShadowGrey/bike-${number2}.png`)

  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);

  const handleMouseDown2 = (e) => {
    setIsDragging2(true);
    setStartX(e.clientX);
  };

  const handleMouseMove2 = (e) => {
    if (isDragging2) {
      const deltaX = e.clientX - startX2;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease2();
        setStartX2(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease2();
        setStartX2(e.clientX);
      }
    }
  };

  const handleMouseUp2 = () => {
    setIsDragging2(false);
  };


  // <------------------Roadster-infernoRed---------------->

  const [number22, setNumber22] = useState(1);
  const BikeInfernoRed = require(`../Components/assets/j-bike/Roadster/Roadster-InfernoRed/bike-${number22}.png`)

  
  const handleDecrease22 = () => {
    setNumber22((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease22 = () => {
    setNumber22((prevNumber) => Math.min(16, prevNumber + 1));
  };


  const [isDragging22, setIsDragging22] = useState(false);
  const [startX22, setStartX22] = useState(0);

  const handleMouseDown22 = (e) => {
    setIsDragging22(true);
    setStartX22(e.clientX);
  };

  const handleMouseMove22 = (e) => {
    if (isDragging22) {
      const deltaX = e.clientX - startX22;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease22();
        setStartX22(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease22();
        setStartX22(e.clientX);
      }
    }
  };

  const handleMouseUp22 = () => {
    setIsDragging22(false);
  };



  // <------------------Roadster-GlacialWhite---------------->

  const [number23, setNumber23] = useState(1);
  const BikeGlacialWhite = require(`../Components/assets/j-bike/Roadster/Roadster-GlacialWhite/bike-${number23}.png`)

  
  const handleDecrease23 = () => {
    setNumber23((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease23 = () => {
    setNumber23((prevNumber) => Math.min(16, prevNumber + 1));
  };

  const [isDragging23, setIsDragging23] = useState(false);
  const [startX23, setStartX23] = useState(0);

  const handleMouseDown23 = (e) => {
    setIsDragging23(true);
    setStartX23(e.clientX);
  };

  const handleMouseMove23 = (e) => {
    if (isDragging23) {
      const deltaX = e.clientX - startX23;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease23();
        setStartX23(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease23();
        setStartX2(e.clientX);
      }
    }
  };

  const handleMouseUp23 = () => {
    setIsDragging23(false);
  };

  // <------------------Roadster-Smoke-grey---------------->

  const [number24, setNumber24] = useState(1);
  const BikeSmokeGrey = require(`../Components/assets/j-bike/Roadster/Roadster-SmokeGrey/bike-${number24}.png`)

  
  const handleDecrease24 = () => {
    setNumber24((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease24 = () => {
    setNumber24((prevNumber) => Math.min(16, prevNumber + 1));
  };

  const [isDragging24, setIsDragging24] = useState(false);
  const [startX24, setStartX24] = useState(0);

  const handleMouseDown24 = (e) => {
    setIsDragging24(true);
    setStartX24(e.clientX);
  };

  const handleMouseMove24 = (e) => {
    if (isDragging24) {
      const deltaX = e.clientX - startX24;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease24();
        setStartX24(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease24();
        setStartX24(e.clientX);
      }
    }
  };

  const handleMouseUp24 = () => {
    setIsDragging24(false);
  };

  // <------------------Roadster-Hunter-grey---------------->

  const [number25, setNumber25] = useState(1);
  const BikeHunterGrey = require(`../Components/assets/j-bike/Roadster/Roadster-HunterGrey/bike-${number25}.png`)

  
  const handleDecrease25 = () => {
    setNumber25((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease25 = () => {
    setNumber25((prevNumber) => Math.min(16, prevNumber + 1));
  };

  const [isDragging25, setIsDragging25] = useState(false);
  const [startX25, setStartX25] = useState(0);

  const handleMouseDown25 = (e) => {
    setIsDragging25(true);
    setStartX25(e.clientX);
  };

  const handleMouseMove25 = (e) => {
    if (isDragging25) {
      const deltaX = e.clientX - startX25;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease25();
        setStartX25(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease25();
        setStartX25(e.clientX);
      }
    }
  };

  const handleMouseUp25 = () => {
    setIsDragging25(false);
  };

  // <------------------Roadster-Steel-blue---------------->

  const [number26, setNumber26] = useState(1);
  const BikeSteelBlue = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)

  
  const handleDecrease26 = () => {
    setNumber26((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease26 = () => {
    setNumber26((prevNumber) => Math.min(16, prevNumber + 1));
  };

  const [isDragging26, setIsDragging26] = useState(false);
  const [startX26, setStartX26] = useState(0);

  const handleMouseDown26 = (e) => {
    setIsDragging26(true);
    setStartX26(e.clientX);
  };

  const handleMouseMove26 = (e) => {
    if (isDragging26) {
      const deltaX = e.clientX - startX26;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease26();
        setStartX26(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease26();
        setStartX26(e.clientX);
      }
    }
  };

  const handleMouseUp26 = () => {
    setIsDragging26(false);
  };





  const [number3, setNumber3] = useState(1);
  const BikeWithoutWhite = require(`../Components/assets/j-bike/Adventure/Adventure-WhithoutWhite/bike-${number3}.png`)

  const [number32, setNumber32] = useState(1);
  const BikeSlickSilver = require(`../Components/assets/j-bike/Adventure/Adventure-SlickSliver/bike-${number32}.png`)

  const handleDecrease32 = () => {
    setNumber32((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease32 = () => {
    setNumber32((prevNumber) => Math.min(16, prevNumber + 1));
  };

  // <------------------------------Adventure----------------------------->

  const [number33, setNumber33] = useState(1);
  const BikeMambaBlack = require(`../Components/assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number33}.png`)

  const handleDecrease33 = () => {
    setNumber33((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease33 = () => {
    setNumber33((prevNumber) => Math.min(17, prevNumber + 1));
  };

  // <-------------- MambaBlack--------------------->

  const [isDragging33, setIsDragging33] = useState(false);
  const [startX33, setStartX33] = useState(0);

  const handleMouseDown33 = (e) => {
    setIsDragging33(true);
    setStartX33(e.clientX);
  };

  const handleMouseMove33 = (e) => {
    if (isDragging33) {
      const deltaX = e.clientX - startX33;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease33();
        setStartX33(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease33();
        setStartX33(e.clientX);
      }
    }
  };
  const handleMouseUp33 = () => {
    setIsDragging33(false);
  };
  // <-------------- Slcik Sliver--------------------->

  const [isDragging32, setIsDragging32] = useState(false);
  const [startX32, setStartX32] = useState(0);

  const handleMouseDown32 = (e) => {
    setIsDragging32(true);
    setStartX32(e.clientX);
  };

  const handleMouseMove32 = (e) => {
    if (isDragging32) {
      const deltaX = e.clientX - startX32;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease32();
        setStartX32(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease32();
        setStartX32(e.clientX);
      }
    }
  };
  const handleMouseUp32 = () => {
    setIsDragging32(false);
  };
  // <-------------- WhithoutWhite--------------------->

  const [isDragging3, setIsDragging3] = useState(false);
  const [startX3, setStartX3] = useState(0);

  const handleMouseDown3 = (e) => {
    setIsDragging3(true);
    setStartX3(e.clientX);
  };

  const handleMouseMove3 = (e) => {
    if (isDragging3) {
      const deltaX = e.clientX - startX3;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease3();
        setStartX3(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease3();
        setStartX3(e.clientX);
      }
    }
  };

  const handleMouseUp3 = () => {
    setIsDragging3(false);
  };


  // <-----------------------Drag----------------------------------------------------->
// <----------------------Scrambler--------------------------------->
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease();
        setStartX(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease();
        setStartX(e.clientX);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // <-----------MidnightBlue--------------------------->

  const [isDragging12, setIsDragging12] = useState(false);
  const [startX12, setStartX12] = useState(0);

  const handleMouseDown12 = (e) => {
    setIsDragging12(true);
    setStartX12(e.clientX);
  };

  
  const handleMouseMove12 = (e) => {
    if (isDragging12) {
      const deltaX = e.clientX - startX12;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease12();
        setStartX12(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease12();
        setStartX12(e.clientX);
      }
    }
  };

  const handleMouseUp12 = () => {
    setIsDragging12(false);
  };
  // <-----------FireOrange--------------------------->

  const [isDragging13, setIsDragging13] = useState(false);
  const [startX13, setStartX13] = useState(0);

  const handleMouseDown13 = (e) => {
    setIsDragging13(true);
    setStartX13(e.clientX);
  };

  
  const handleMouseMove13 = (e) => {
    if (isDragging13) {
      const deltaX = e.clientX - startX13;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease13();
        setStartX13(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease13();
        setStartX13(e.clientX);
      }
    }
  };

  const handleMouseUp13 = () => {
    setIsDragging13(false);
  };
  // <-----------MeenGreen--------------------------->

  const [isDragging14, setIsDragging14] = useState(false);
  const [startX14, setStartX14] = useState(0);

  const handleMouseDown14 = (e) => {
    setIsDragging14(true);
    setStartX14(e.clientX);
  };

  
  const handleMouseMove14 = (e) => {
    if (isDragging14) {
      const deltaX = e.clientX - startX14;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease14();
        setStartX14(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease14();
        setStartX14(e.clientX);
      }
    }
  };

  const handleMouseUp14 = () => {
    setIsDragging14(false);
  };
  // <-----------OutlawOlive--------------------------->

  const [isDragging15, setIsDragging15] = useState(false);
  const [startX15, setStartX15] = useState(0);

  const handleMouseDown15 = (e) => {
    setIsDragging15(true);
    setStartX15(e.clientX);
  };

  
  const handleMouseMove15 = (e) => {
    if (isDragging15) {
      const deltaX = e.clientX - startX15;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease15();
        setStartX15(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease15();
        setStartX15(e.clientX);
      }
    }
  };

  const handleMouseUp15 = () => {
    setIsDragging15(false);
  };
  // <-----------RebelRed--------------------------->

  const [isDragging16, setIsDragging16] = useState(false);
  const [startX16, setStartX16] = useState(0);

  const handleMouseDown16 = (e) => {
    setIsDragging16(true);
    setStartX16(e.clientX);
  };

  
  const handleMouseMove16 = (e) => {
    if (isDragging16) {
      const deltaX = e.clientX - startX16;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease16();
        setStartX16(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease16();
        setStartX16(e.clientX);
      }
    }
  };

  const handleMouseUp16 = () => {
    setIsDragging16(false);
  };
  // <-----------YellingYellow--------------------------->

  const [isDragging17, setIsDragging17] = useState(false);
  const [startX17, setStartX17] = useState(0);

  const handleMouseDown17 = (e) => {
    setIsDragging17(true);
    setStartX17(e.clientX);
  };

  
  const handleMouseMove17 = (e) => {
    if (isDragging17) {
      const deltaX = e.clientX - startX17;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease17();
        setStartX17(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease17();
        setStartX17(e.clientX);
      }
    }
  };

  const handleMouseUp17 = () => {
    setIsDragging17(false);
  };


















  const handleDecrease = () => {
    setNumber((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease = () => {
    setNumber((prevNumber) => Math.min(16, prevNumber + 1));
  };

  const handleDecrease2 = () => {
    setNumber2((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease2 = () => {
    setNumber2((prevNumber) => Math.min(16, prevNumber + 1));
  };
  const handleDecrease3 = () => {
    setNumber3((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease3 = () => {
    setNumber3((prevNumber) => Math.min(16, prevNumber + 1));
  };



  const [selectedEvent, setSelectedEvent] = useState('event1');
  const [selectedColor, setSelectedColor] = useState('BoldBlack');

  const [selectedEvent2, setSelectedEvent2] = useState('event2');
  const [selectedColor2, setSelectedColor2] = useState('MidnightBlue');

  const [selectedEvent3, setSelectedEvent3] = useState('event3');
  const [selectedColor3, setSelectedColor3] = useState('FireOrange');

  const [eventDetails, setEventDetails] = useState({
    event1: { title: 'Scrambler', price: 'On Road Price ₹ 2,08,829' },
    event2: { title: 'Roadster', price: 'On Road Price ₹ 2,08,829' },
    event3: { title: 'Adventure', price: 'On Road Price ₹ 2,08,829' },
  });
  const renderDetails = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent === event ? 'active' : ''}`} onClick={() => handleEventClick(event, 'BoldBlack')}>
        <h3>{title}</h3>
        {selectedEvent === event ? <p>{price}</p> : ""}
      </div>
    );
  };

  const renderDetails2 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent2 === event ? 'active' : ''}`} onClick={() => handleEventClick2(event, 'MidnightBlue')}>
        <h3>{title}</h3>
        {selectedEvent2 === event ? <p>{price}</p> : ""}
      </div>
    );
  };

  const renderDetails3 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent3 === event ? 'active' : ''}`} onClick={() => handleEventClick3(event, 'FireOrange')}>
        <h3>{title}</h3>
        {selectedEvent3 === event ? <p>{price}</p> : ""}
      </div>
    );
  };


  useEffect(() => {

    setSelectedEvent('event1');
    setSelectedEvent2('');
    setSelectedEvent3('');
  }, []);

  const handleEventClick = (event, color) => {
    setSelectedEvent(event);
    setSelectedColor(color);
    setSelectedEvent2('');
    setSelectedEvent3('');
  };

  const handleEventClick2 = (event, color) => {
    setSelectedEvent2(event);
    setSelectedColor2(color);
    setSelectedEvent('');
    setSelectedEvent3('');
  };

  const handleEventClick3 = (event, color) => {
    setSelectedEvent3(event);
    setSelectedColor3(color);
    setSelectedEvent('');
    setSelectedEvent2('');
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleColorClick2 = (color2) => {
    setSelectedColor2(color2);
  };

  const handleColorClick3 = (color3) => {
    setSelectedColor3(color3);
  };

  const getColorImageSource = (color) => {
    switch (color) {
      case 'BoldBlack':
        return BikeBoldBlack;
      case 'MidnightBlue':
        return BikeMidnightBlue;
      case 'FireOrange':
        return BikeFireOrange;
      case 'MeanGreen':
        return BikeMeanGreen;
      case 'OutlawOlive':
        return BikeOutlawOlive;
      case 'RebelRed':
        return BikeRebelRed;
      case 'YellingYellow':
        return BikeYellingYellow;
      default:
        return BikeBoldBlack;
    }
  };

  const getColorImageSource2 = (color2) => {
    switch (color2) {
      case 'ShodowGrey':
        return BikeShodowGrey;
      case 'InfernoRed':
        return BikeInfernoRed;
      case 'GlacialWhite':
        return BikeGlacialWhite;
      case 'SmokeGrey':
        return BikeSmokeGrey;
      case 'HunterGrey':
        return BikeHunterGrey;
      case 'SteelBlue':
        return BikeSteelBlue;
      default:
        return BikeShodowGrey;
    }
  };

  const getColorImageSource3 = (color3) => {
    switch (color3) {
      case 'WithoutWhite':
        return BikeWithoutWhite;
      case 'SlickSilver':
        return BikeSlickSilver;
      case 'MambaBlack':
        return BikeMambaBlack;
      default:
        return BikeWithoutWhite;
    }
  };

  return (
    <div>
      <section className='view-360'>
        <div className='container-fluid view-360-container'>
          <div className='view-360-container-info text-center'>
            <h2>Take <span> 360 View</span></h2>

          </div>
          <div className='row view-360-main'>
            <div className='col-lg-1 timeline-main'>
              <div className="timeline">
                <div className={`event-1 ${selectedEvent === 'event1' ? 'active' : ''}`} onClick={() => handleEventClick('event1', 'BoldBlack')}>
                  <div className="event-content1">
                    {renderDetails('event1', 'Scrambler', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-2 ${selectedEvent2 === 'event2' ? 'active' : ''}`} onClick={() => handleEventClick2('event2', 'MidnightBlue')}>
                  <div className="event-content2">
                    {renderDetails2('event2', 'Roadster', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-3 ${selectedEvent3 === 'event3' ? 'active' : ''}`} onClick={() => handleEventClick3('event3', 'FireOrange')}>
                  <div className="event-content2">
                    {renderDetails3('event3', 'Adventure', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
              </div>
            </div>

<div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
  <section className='slider'>
    <Box>
    {selectedColor === 'YellingYellow' ? (
       <>
       <img
         src={BikeYellingYellow}
         className='img-fluid'
         alt=""
         style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
         onMouseDown={handleMouseDown17}
         onMouseMove={handleMouseMove17}
         onMouseUp={handleMouseUp17}
       />
       <div className='view-360-icons-main'>
         <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
           <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease17} />
           <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease17} />
         </Stack>
       </div>
     </>

    ):selectedColor === 'RebelRed' ? (
  <>
  <img
    src={BikeRebelRed}
    className='img-fluid'
    alt=""
    style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
    onMouseDown={handleMouseDown16}
    onMouseMove={handleMouseMove16}
    onMouseUp={handleMouseUp16}
  />
  <div className='view-360-icons-main'>
    <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
      <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease16} />
      <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease16} />
    </Stack>
  </div>
</>
    ): selectedColor === 'OutlawOlive' ? (
       <>
       <img
         src={BikeOutlawOlive}
         className='img-fluid'
         alt=""
         style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
         onMouseDown={handleMouseDown15}
         onMouseMove={handleMouseMove15}
         onMouseUp={handleMouseUp15}
       />
       <div className='view-360-icons-main'>
         <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
           <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease15} />
           <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease15} />
         </Stack>
       </div>
     </>
    ):selectedColor === 'MeanGreen' ? (
        <>
          <img
            src={BikeMeanGreen}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown14}
            onMouseMove={handleMouseMove14}
            onMouseUp={handleMouseUp14}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease14} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease14} />
            </Stack>
          </div>
        </>
      ) : selectedColor === 'FireOrange' ? (
        <>
          <img
            src={BikeFireOrange}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown13}
            onMouseMove={handleMouseMove13}
            onMouseUp={handleMouseUp13}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease13} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease13} />
            </Stack>
          </div>
        </>
      ) : selectedColor === 'MidnightBlue' ? (
        <>
          <img
            src={BikeMidnightBlue}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown12}
            onMouseMove={handleMouseMove12}
            onMouseUp={handleMouseUp12}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease12} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease12} />
            </Stack>
          </div>
        </>
      ) : (
        <>
          <img
            src={getColorImageSource(selectedColor)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease} />
            </Stack>
          </div>
        </>
      )}
    </Box>
  </section>
</div>



<div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
  <section className='slider'>
    <Box>
    {selectedColor2 === "SteelBlue" ? (
       <>
       <img
         src={getColorImageSource2(selectedColor2)}
         className='img-fluid'
         alt=""
         style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
         onMouseDown={handleMouseDown26}
         onMouseMove={handleMouseMove26}
         onMouseUp={handleMouseUp26}
       />
       <div className='view-360-icons-main'>
         <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
           <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease26} />
           <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease26} />
         </Stack>
       </div>
     </>
    ): selectedColor2 === "HunterGrey" ? (
     <>
     <img
       src={getColorImageSource2(selectedColor2)}
       className='img-fluid'
       alt=""
       style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
       onMouseDown={handleMouseDown25}
       onMouseMove={handleMouseMove25}
       onMouseUp={handleMouseUp25}
     />
     <div className='view-360-icons-main'>
       <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
         <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease25} />
         <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease25} />
       </Stack>
     </div>
   </>
    ):selectedColor2 === "SmokeGrey" ? (
        <>
        <img
          src={getColorImageSource2(selectedColor2)}
          className='img-fluid'
          alt=""
          style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
          onMouseDown={handleMouseDown24}
          onMouseMove={handleMouseMove24}
          onMouseUp={handleMouseUp24}
        />
        <div className='view-360-icons-main'>
          <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
            <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease24} />
            <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease24} />
          </Stack>
        </div>
      </>
    ): selectedColor2 === "GlacialWhite" ? (
  <>
  <img
    src={getColorImageSource2(selectedColor2)}
    className='img-fluid'
    alt=""
    style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
    onMouseDown={handleMouseDown23}
    onMouseMove={handleMouseMove23}
    onMouseUp={handleMouseUp23}
  />
  <div className='view-360-icons-main'>
    <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
      <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease23} />
      <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease23} />
    </Stack>
  </div>
</>
    ): selectedColor2 === "InfernoRed" ? (
        <>
          <img
            src={getColorImageSource2(selectedColor2)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown22}
            onMouseMove={handleMouseMove22}
            onMouseUp={handleMouseUp22}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease22} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease22} />
            </Stack>
          </div>
        </>
      ) : (
        <>
          <img
            src={getColorImageSource2(selectedColor2)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown2}
            onMouseMove={handleMouseMove2}
            onMouseUp={handleMouseUp2}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease2} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease2} />
            </Stack>
          </div>
        </>
      )}
    </Box>
  </section>
</div>
<div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent3 === 'event3' ? '' : 'd-none'}`}>
  <section className='slider'>
    <Box>
      {selectedColor3 === "MambaBlack" ? (
        <div>
          <img
            src={getColorImageSource3(selectedColor3)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown33}
            onMouseMove={handleMouseMove33}
            onMouseUp={handleMouseUp33}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease33} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease33} />
            </Stack>
          </div>
        </div>
      ) : selectedColor3 === "SlickSilver" ? (
        <div>
          <img
            src={getColorImageSource3(selectedColor3)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown32}
            onMouseMove={handleMouseMove32}
            onMouseUp={handleMouseUp32}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease32} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease32} />
            </Stack>
          </div>
        </div>
      ) : (
        <div>
          <img
            src={getColorImageSource3(selectedColor3)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown3}
            onMouseMove={handleMouseMove3}
            onMouseUp={handleMouseUp3}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease3} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease3} />
            </Stack>
          </div>
        </div>
      )}
    </Box>
  </section>
</div>


            <div className={`col-lg-1 color-palette ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'BoldBlack' ? 'active' : ''}`}
                onClick={() => handleColorClick('BoldBlack')}
              >
                <div className={`color-box palette-1-scrambler ${selectedColor === 'BoldBlack' ? 'active-palette ' : ''} `}></div>
                <p>Single Tone <span>Bold Black</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'MidnightBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick('MidnightBlue')}
              >
                <div className={`color-box palette-2-scrambler ${selectedColor === 'MidnightBlue' ? 'active-palette ' : ''} `}></div>
                <p>Dual Tone <span>Midnight Blue</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'FireOrange' ? 'active' : ''}`}
                onClick={() => handleColorClick('FireOrange')}
              >
                <div className={`color-box palette-3-scrambler ${selectedColor === 'FireOrange' ? 'active-palette ' : ''} `}></div>
                <p>Single Tone <span>Fire Orange</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'MeanGreen' ? 'active' : ''}`}
                onClick={() => handleColorClick('MeanGreen')}
              >
                <div className={`color-box palette-4-scrambler ${selectedColor === 'MeanGreen' ? 'active-palette ' : ''} `}></div>
                <p>Dual Tone <span>Mean Green</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'OutlawOlive' ? 'active' : ''}`}
                onClick={() => handleColorClick('OutlawOlive')}
              >
                <div className={`color-box palette-5-scrambler ${selectedColor === 'OutlawOlive' ? 'active-palette ' : ''} `}></div>
                <p>Single Tone <span>Outlaw Olive</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'RebelRed' ? 'active' : ''}`}
                onClick={() => handleColorClick('RebelRed')}
              >
                <div className={`color-box palette-6-scrambler ${selectedColor === 'RebelRed' ? 'active-palette ' : ''} `}></div>
                <p>Dual Tone <span>Rebel Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'YellingYellow' ? 'active' : ''}`}
                onClick={() => handleColorClick('YellingYellow')}
              >
                <div className={`color-box palette-7-scrambler ${selectedColor === 'YellingYellow' ? 'active-palette ' : ''} `}></div>
                <p>Single Tone <span>Yelling Yellow</span></p>
              </div>

            </div>

            {/* <--------------------- Roadster -------------------------------> */}

{/* <----------------------Dual tone---------------------------> */}



            <div className={`col-lg-1 color-palette ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'ShodowGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('ShodowGrey')}
              >
                <div className={`color-box palette-1-Roadster ${selectedColor2 === 'ShodowGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Shodow Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'InfernoRed' ? 'active' : ''}`}
                onClick={() => handleColorClick2('InfernoRed')}
              >
                <div className={`color-box palette-2-Roadster ${selectedColor2 === 'InfernoRed' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Inferno Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'GlacialWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick2('GlacialWhite')}
              >
                <div className={`color-box palette-3-Roadster ${selectedColor2 === 'GlacialWhite' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Glacial White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SmokeGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SmokeGrey')}
              >
                <div className={`color-box palette-4-Roadster ${selectedColor2 === 'SmokeGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Smoke Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'HunterGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('HunterGrey')}
              >
                <div className={`color-box palette-5-Roadster ${selectedColor2 === 'HunterGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Hunter Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SteelBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SteelBlue')}
              >
                <div className={`color-box palette-6-Roadster ${selectedColor2 === 'SteelBlue' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Steel Blue</span></p>
              </div>
            </div>

{/* <----------------------Dual tone---------------------------> */}

            <div className={`col-lg-1 color-palette ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'ShodowGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('ShodowGrey')}
              >
                <div className={`color-box palette-1-Roadster ${selectedColor2 === 'ShodowGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Shodow Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'InfernoRed' ? 'active' : ''}`}
                onClick={() => handleColorClick2('InfernoRed')}
              >
                <div className={`color-box palette-2-Roadster ${selectedColor2 === 'InfernoRed' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Inferno Red</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'GlacialWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick2('GlacialWhite')}
              >
                <div className={`color-box palette-3-Roadster ${selectedColor2 === 'GlacialWhite' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Glacial White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SmokeGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SmokeGrey')}
              >
                <div className={`color-box palette-4-Roadster ${selectedColor2 === 'SmokeGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Smoke Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'HunterGrey' ? 'active' : ''}`}
                onClick={() => handleColorClick2('HunterGrey')}
              >
                <div className={`color-box palette-5-Roadster ${selectedColor2 === 'HunterGrey' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Hunter Grey</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'SteelBlue' ? 'active' : ''}`}
                onClick={() => handleColorClick2('SteelBlue')}
              >
                <div className={`color-box palette-6-Roadster ${selectedColor2 === 'SteelBlue' ? 'active-palette ' : ''} `}></div>
                <p>Dark <span>Steel Blue</span></p>
              </div>
            </div>

            {/* <--------------------- Adventure -------------------------------> */}


            <div className={`col-lg-1 color-palette ${selectedEvent3 === 'event3' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-3 ${selectedColor3 === 'WithoutWhite' ? 'active' : ''}`}
                onClick={() => handleColorClick3('WithoutWhite')}
              >
                <div className={`color-box palette-1-Adventure ${selectedColor3 === 'WithoutWhite' ? 'active-palette ' : ''} `}></div>
                <p>Gloss Tone <span>Without White</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor3 === 'SlickSilver' ? 'active' : ''}`}
                onClick={() => handleColorClick3('SlickSilver')}
              >
                <div className={`color-box palette-2-Adventure ${selectedColor3 === 'SlickSilver' ? 'active-palette ' : ''} `}></div>
                <p>Matte <span>Slick Silver</span></p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor3 === 'MambaBlack' ? 'active' : ''}`}
                onClick={() => handleColorClick3('MambaBlack')}
              >
                <div className={`color-box palette-3-Adventure ${selectedColor3 === 'MambaBlack' ? 'active-palette ' : ''} `}></div>
                <p>Matte <span>Mamba Black</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Highlights selectedEvent1={selectedEvent} selectedEvent2={selectedEvent2} selectedEvent3={selectedEvent3} />


    </div>
  );
}
