import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import Highlights from '../Highlights';



export default function New() {

  // <------------Scrambler------------------------------->

  const [number, setNumber] = useState(1);
  const BikeRed =  require(`../assets/j-bike/Jawa-350/Maroon/bike-${number}.png`)


  // <------------Scrambler Midnightblue------------------------------->
  const [number12, setNumber12] = useState(1);
  const BikeBrown = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)


  const handleDecrease12 = () => {
    setNumber12((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease12 = () => {
    setNumber12((prevNumber) => Math.min(16, prevNumber + 1));
  };
  // <------------Scrambler FireOrange------------------------------->
  const [number13, setNumber13] = useState(1);
  const BikeBlack = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)


  const handleDecrease13 = () => {
    setNumber13((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease13 = () => {
    setNumber13((prevNumber) => Math.min(16, prevNumber + 1));
  };
  

  const [number2, setNumber2] = useState(1);
  const BikeBlackmirror = require(`../assets/j-bike/Bobber/BlackMirror/bike-${number2}.png`)

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
  const BikeMysticcopper = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)

  
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
  const BikeMoonstonewhite = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)

  
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
  const BikeJasperreddualtone = require(`../assets/j-bike/Jawa-350/Maroon/bike-${number}.png`)

  
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

  


  const [number3, setNumber3] = useState(1);
  const BikeDefault = require(`../assets/j-bike/Perak/bike-${number3}.png`)


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


  // <---------------------------------42 CosmicCarbon ------------------------------------------------>

  const [number4, setNumber4] = useState(1);
  const BikeCosmiccarbon = require(`../assets/j-bike/42/CosmicCarbon/bike-${number4}.png`)

  
  const handleDecrease4 = () => {
    setNumber4((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease4 = () => {
    setNumber4((prevNumber) => Math.min(16, prevNumber + 1));
  };


  const [isDragging4, setIsDragging4] = useState(false);
  const [startX4, setStartX4] = useState(0);

  const handleMouseDown4 = (e) => {
    setIsDragging4(true);
    setStartX4(e.clientX);
  };

  const handleMouseMove4 = (e) => {
    if (isDragging4) {
      const deltaX = e.clientX - startX4;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease4();
        setStartX4(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease4();
        setStartX4(e.clientX);
      }
    }
  };

  const handleMouseUp4 = () => {
    setIsDragging4(false);
  };


// <---------------------------------42 Allstarblack ------------------------------------------------>

  const [number42, setNumber42] = useState(1);
  const BikeAllstarblack = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)

  
  const handleDecrease42 = () => {
    setNumber42((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease42 = () => {
    setNumber42((prevNumber) => Math.min(16, prevNumber + 1));
  };


  const [isDragging42, setIsDragging42] = useState(false);
  const [startX42, setStartX42] = useState(0);

  const handleMouseDown42 = (e) => {
    setIsDragging42(true);
    setStartX42(e.clientX);
  };

  const handleMouseMove42 = (e) => {
    if (isDragging42) {
      const deltaX = e.clientX - startX42;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease42();
        setStartX42(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease42();
        setStartX42(e.clientX);
      }
    }
  };

  const handleMouseUp42 = () => {
    setIsDragging42(false);
  };


// <---------------------------------42 Sirus White------------------------------------------------>

  const [number43, setNumber43] = useState(1);
  const BikeSiriuswhite = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)

  
  const handleDecrease43 = () => {
    setNumber43((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease43 = () => {
    setNumber43((prevNumber) => Math.min(16, prevNumber + 1));
  };


  const [isDragging43, setIsDragging43] = useState(false);
  const [startX43, setStartX43] = useState(0);

  const handleMouseDown43 = (e) => {
    setIsDragging43(true);
    setStartX43(e.clientX);
  };

  const handleMouseMove43 = (e) => {
    if (isDragging43) {
      const deltaX = e.clientX - startX43;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease43();
        setStartX43(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease43();
        setStartX43(e.clientX);
      }
    }
  };

  const handleMouseUp43 = () => {
    setIsDragging43(false);
  };


// <---------------------------------42 Orion White ------------------------------------------------>

  const [number44, setNumber44] = useState(1);
  const BikeOrionred = require(`../assets/j-bike/Adventure/Adventure-MambaBlack/bike-${number}.png`)

  
  const handleDecrease44 = () => {
    setNumber44((prevNumber) => Math.max(1, prevNumber - 1));
  };

  const handleIncrease44 = () => {
    setNumber44((prevNumber) => Math.min(16, prevNumber + 1));
  };


  const [isDragging44, setIsDragging44] = useState(false);
  const [startX44, setStartX44] = useState(0);

  const handleMouseDown44 = (e) => {
    setIsDragging44(true);
    setStartX44(e.clientX);
  };

  const handleMouseMove44 = (e) => {
    if (isDragging44) {
      const deltaX = e.clientX - startX44;
      const sensitivity = 5;
      if (deltaX > sensitivity) {
        handleIncrease44();
        setStartX44(e.clientX);
      } else if (deltaX < -sensitivity) {
        handleDecrease44();
        setStartX44(e.clientX);
      }
    }
  };

  const handleMouseUp44 = () => {
    setIsDragging44(false);
  };



  const [selectedEvent, setSelectedEvent] = useState('event1');
  const [selectedColor, setSelectedColor] = useState('Red');

  const [selectedEvent2, setSelectedEvent2] = useState('event2');
  const [selectedColor2, setSelectedColor2] = useState('Blackmirror');
 

  const [selectedEvent3, setSelectedEvent3] = useState('event3');
  const [selectedColor3, setSelectedColor3] = useState('Default');

  const [selectedEvent4, setSelectedEvent4] = useState('event3');
  const [selectedColor4, setSelectedColor4] = useState('Default');


  const renderDetails = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent === event ? 'active' : ''}`} onClick={() => handleEventClick(event, 'Red')}>
        <h3>{title}</h3>
        {selectedEvent === event ? <p>{price}</p> : ""}
      </div>
    );
  };

  const renderDetails2 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent2 === event ? 'active' : ''}`} onClick={() => handleEventClick2(event, 'Blackmirror')}>
        <h3>{title}</h3>
        {selectedEvent2 === event ? <p>{price}</p> : ""}
      </div>
    );
  };

  const renderDetails3 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent3 === event ? 'active' : ''}`} onClick={() => handleEventClick3(event, 'Default')}>
        <h3>{title}</h3>
        {selectedEvent3 === event ? <p>{price}</p> : ""}
      </div>
    );
  };

  const renderDetails4 = (event, title, price) => {
    return (
      <div className={`event-content1 ${selectedEvent4 === event ? 'active' : ''}`} onClick={() => handleEventClick4(event, 'Default')}>
        <h3>{title}</h3>
        {selectedEvent3 === event ? <p>{price}</p> : ""}
      </div>
    );
  };


  useEffect(() => {

    setSelectedEvent('event1');
    setSelectedEvent2('');
    setSelectedEvent3('');
    setSelectedEvent4('');
  }, []);

  const handleEventClick = (event, color) => {
    setSelectedEvent(event);
    setSelectedColor(color);
    setSelectedEvent2('');
    setSelectedEvent3('');
    setSelectedEvent4('');
  };

  const handleEventClick2 = (event, color) => {
    setSelectedEvent2(event);
    setSelectedColor2(color);
    setSelectedEvent('');
    setSelectedEvent3('');
    setSelectedEvent4('');
  };

  const handleEventClick3 = (event, color) => {
    setSelectedEvent3(event);
    setSelectedColor3(color);
    setSelectedEvent('');
    setSelectedEvent2('');
    setSelectedEvent4('');
  };
  const handleEventClick4 = (event, color) => {
    setSelectedEvent4(event);
    setSelectedColor4(color);
    setSelectedEvent('');
    setSelectedEvent2('');
    setSelectedEvent3('');
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
  const handleColorClick4 = (color4) => {
    setSelectedColor4(color4);
  };
 

  const getColorImageSource = (color) => {
    switch (color) {
      case 'Red':
        return BikeRed;
      case 'Brown':
        return BikeBrown;
      case 'Black':
        return BikeBlack;
      default:
        return BikeRed;
    }
  };

  const getColorImageSource2 = (color2) => {
    switch (color2) {
      case 'Blackmirror':
        return BikeBlackmirror;
      case 'Mysticcopper':
        return BikeMysticcopper;
      case 'Moonstonewhite':
        return BikeMoonstonewhite;
      case 'Jasperreddualtone':
        return BikeJasperreddualtone;
      default:
        return BikeBlackmirror;
    }
  };
  const getColorImageSource4 = (color4) => {
    switch (color4) {
      case 'Cosmiccarbon':
        return BikeCosmiccarbon;
      case 'Allstarblack':
        return BikeAllstarblack;
      case 'Siriuswhite':
        return BikeSiriuswhite;
      case 'Orionred':
        return BikeOrionred;
      default:
        return BikeCosmiccarbon;
    }
  };

  const getColorImageSource3 = (color3) => {
    switch (color3) {
      case 'Default':
        return BikeDefault;
      default:
        return BikeDefault;
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
              <div className="timeline-2">
                <div className={`event-1-2 ${selectedEvent === 'event1' ? 'active' : ''}`} onClick={() => handleEventClick('event1', 'BoldBlack')}>
                  <div className="event-content1-2">
                    {renderDetails('event1', 'Jawa 350', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-2-2 ${selectedEvent2 === 'event2' ? 'active' : ''}`} onClick={() => handleEventClick2('event2', 'MidnightBlue')}>
                  <div className="event-content1-2">
                    {renderDetails2('event2', '42 Bobber', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-3-2 ${selectedEvent3 === 'event3' ? 'active' : ''}`} onClick={() => handleEventClick3('event3', 'FireOrange')}>
                  <div className="event-content1-2">
                    {renderDetails3('event3', 'Perak', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
                <div className={`event-4-2 ${selectedEvent4 === 'event4' ? 'active' : ''}`} onClick={() => handleEventClick4('event4', 'FireOrange')}>
                  <div className="event-content1-2">
                    {renderDetails4('event4', '42', 'On Road Price ₹ 2,08,829', 'Description for Scrambler')}
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
  <section className='slider'>
    <Box>
      {selectedColor === 'Black' ? (
        <>
          <img
            src={BikeBlack}
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
      ) : selectedColor === 'Brown' ? (
        <>
          <img
            src={BikeBrown}
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
      {selectedColor2 === "Jasperreddualtone" ? (
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
      ) : selectedColor2 === "Moonstonewhite" ? (
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
      ) : selectedColor2 === "Mysticcopper" ? (
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

<div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent4 === 'event4' ? '' : 'd-none'}`}>
  <section className='slider'>
    <Box>
      {selectedColor2 === "Orionred" ? (
        <>
          <img
            src={getColorImageSource4(selectedColor4)}
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
      ) : selectedColor2 === "Siriuswhite" ? (
        <>
          <img
            src={getColorImageSource4(selectedColor4)}
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
      ) : selectedColor2 === "Allstarblack" ? (
        <>
          <img
            src={getColorImageSource4(selectedColor4)}
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
            src={getColorImageSource4(selectedColor4)}
            className='img-fluid'
            alt=""
            style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
            onMouseDown={handleMouseDown4}
            onMouseMove={handleMouseMove4}
            onMouseUp={handleMouseUp4}
          />
          <div className='view-360-icons-main'>
            <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
              <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease4} />
              <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease4} />
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
    </Box>
  </section>
</div>


            <div className={`col-lg-1 color-palette ${selectedEvent === 'event1' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'Red' ? 'active' : ''}`}
                onClick={() => handleColorClick('Red')}
              >
                <div className={`color-box palette-1-Jawa-350 ${selectedColor === 'Red' ? 'active-palette ' : ''} `}></div>
                <p>Maroon</p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'Brown' ? 'active' : ''}`}
                onClick={() => handleColorClick('Brown')}
              >
                <div className={`color-box palette-2-Jawa-350 ${selectedColor === 'Brown' ? 'active-palette ' : ''} `}></div>
                <p>Mystique Orange</p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info ${selectedColor === 'Black' ? 'active' : ''}`}
                onClick={() => handleColorClick('Black')}
              >
                <div className={`color-box palette-3-Jawa-350 ${selectedColor === 'Black' ? 'active-palette ' : ''} `}></div>
                <p>Black</p>
              </div>

            </div>

            {/* <--------------------- 42 Bobber-------------------------------> */}


<div className={`col-lg-1 color-palette ${selectedEvent2 === 'event2' ? '' : 'd-none'}`}>


              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'Blackmirror' ? 'active' : ''}`}
                onClick={() => handleColorClick2('Blackmirror')}
              >
                <div className={`color-box palette-1-Bobber ${selectedColor2 === 'Blackmirror' ? 'active-palette ' : ''} `}></div>
                <p>Black Mirror</p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'Mysticcopper' ? 'active' : ''}`}
                onClick={() => handleColorClick2('Mysticcopper')}
              >
                <div className={`color-box palette-2-Bobber ${selectedColor2 === 'Mysticcopper' ? 'active-palette ' : ''} `}></div>
                <p>Mystic Copper </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'Moonstonewhite' ? 'active' : ''}`}
                onClick={() => handleColorClick2('Moonstonewhite')}
              >
                <div className={`color-box palette-3-Bobber ${selectedColor2 === 'Moonstonewhite' ? 'active-palette ' : ''} `}></div>
                <p>Moonstone White </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor2 === 'Jasperreddualtone' ? 'active' : ''}`}
                onClick={() => handleColorClick2('Jasperreddualtone')}
              >
                <div className={`color-box palette-4-Bobber ${selectedColor2 === 'Jasperreddualtone' ? 'active-palette ' : ''} `}></div>
                <p>Jasper red dual tone </p>
              </div>
            </div>

            {/* <----------------------------------------------42----------------------------------------------------------------> */}
              <div className={`col-lg-1 color-palette ${selectedEvent4 === 'event4' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Cosmiccarbon' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Cosmiccarbon')}
              >
                <div className={`color-box palette-1-42 ${selectedColor4 === 'Cosmiccarbon' ? 'active-palette ' : ''} `}></div>
                <p>Cosmic carbon</p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Allstarblack' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Allstarblack')}
              >
                <div className={`color-box palette-2-42 ${selectedColor4 === 'Allstarblack' ? 'active-palette ' : ''} `}></div>
                <p>All star black </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Siriuswhite' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Siriuswhite')}
              >
                <div className={`color-box palette-3-42 ${selectedColor4 === 'Siriuswhite' ? 'active-palette ' : ''} `}></div>
                <p>Sirius White </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Orionred' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Orionred')}
              >
                <div className={`color-box palette-4-42 ${selectedColor4 === 'Orionred' ? 'active-palette ' : ''} `}></div>
                <p>Orion Red </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Orionred' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Orionred')}
              >
                <div className={`color-box palette-5-42 ${selectedColor4 === 'Orionred' ? 'active-palette ' : ''} `}></div>
                <p>Infinity Black </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Orionred' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Orionred')}
              >
                <div className={`color-box palette-6-42 ${selectedColor4 === 'Orionred' ? 'active-palette ' : ''} `}></div>
                <p>Starship Blue </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Orionred' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Orionred')}
              >
                <div className={`color-box palette-7-42 ${selectedColor4 === 'Orionred' ? 'active-palette ' : ''} `}></div>
                <p>Celestial Coppe </p>
              </div>
              <div
                className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Orionred' ? 'active' : ''}`}
                onClick={() => handleColorClick4('Orionred')}
              >
                <div className={`color-box palette-8-42 ${selectedColor4 === 'Orionred' ? 'active-palette ' : ''} `}></div>
                <p>Cosmic Rock </p>
              </div>
            </div>
          


            {/* <--------------------- Perak -------------------------------> */}


            <div className={`col-lg-1 color-palette ${selectedEvent3 === 'event3' ? '' : 'd-none'}`}>
              <div
                className={`d-flex align-items-center color-palette-info-3 ${selectedColor3 === 'Default' ? 'active' : ''}`}
                onClick={() => handleColorClick3('Default')}
              >
                <div className={`color-box palette-1-Perak ${selectedColor3 === 'Default' ? 'active-palette ' : ''} `}></div>
                <p>Default</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Highlights selectedEvent1={selectedEvent} selectedEvent2={selectedEvent2} selectedEvent3={selectedEvent3} />


    </div>
  );
}
