  {/* <-------------Dualtone---------------> */}
 // const getColorImageSource4 = (color4) => {
  //   switch (color4) {
  //     case 'RushHourRed':
  //       return BikeRushHourRed;
  //     case 'LunarWhite':
  //       return BikeLunarWhite;
  //     case 'ForestGreen':
  //       return BikeForestGreen;
  //     case 'Crimson':
  //       return BikeCrimson;
  //     case 'GallantGrey':
  //       return BikeGallantGrey;
  //     case 'SinSilver':
  //       return BikeSinSilver;
  //     default:
  //       return BikeRushHourRed;
  //   }
  // };
  // const [selectedColor4, setSelectedColor4] = useState('RushHourRed');



  // const [eventDetails, setEventDetails] = useState({
  //   event1: { title: 'Scrambler', price: 'On Road Price ₹ 2,08,829' },
  //   event2: { title: 'Roadster', price: 'On Road Price ₹ 2,08,829' },
  //   event3: { title: 'Adventure', price: 'On Road Price ₹ 2,08,829' },
  // });
  
{/* 
  <div className={`col-lg-8 d-flex justify-content-center align-items-center ${selectedEvent2 === 'event3' ? '' : 'd-none'}`}>
  <section className='slider'>
      <Box>
        {selectedColor4 === "SinSilver" ? (
          <>
            <img
              src={getColorImageSource4(selectedColor4)}
              className='img-fluid'
              alt=""
              style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
              onMouseDown={handleMouseDown34}
              onMouseMove={handleMouseMove34}
              onMouseUp={handleMouseUp34}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease34} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease34} />
              </Stack>
            </div>
          </>
        ) : selectedColor4 === "GallantGrey" ? (
          <>
            <img
              src={getColorImageSource4(selectedColor4)}
              className='img-fluid'
              alt=""
              style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
              onMouseDown={handleMouseDown31}
              onMouseMove={handleMouseMove31}
              onMouseUp={handleMouseUp31}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease31} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease31} />
              </Stack>
            </div>
          </>
        ) : selectedColor4 === "Crimson" ? (
          <>
            <img
              src={getColorImageSource4(selectedColor4)}
              className='img-fluid'
              alt=""
              style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
              onMouseDown={handleMouseDown30}
              onMouseMove={handleMouseMove30}
              onMouseUp={handleMouseUp30}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease30} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease30} />
              </Stack>
            </div>
          </>
        ) : selectedColor4 === "ForestGreen" ? (
          <>
            <img
              src={getColorImageSource4(selectedColor4)}
              className='img-fluid'
              alt=""
              style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
              onMouseDown={handleMouseDown29}
              onMouseMove={handleMouseMove29}
              onMouseUp={handleMouseUp29}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease29} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease29} />
              </Stack>
            </div>
          </>
        ) : selectedColor4 === "LunarWhite" ? (
          <>
            <img
              src={getColorImageSource4(selectedColor4)}
              className='img-fluid'
              alt=""
              style={{ cursor: 'grab', width: "100%", userSelect: 'none' }}
              onMouseDown={handleMouseDown28}
              onMouseMove={handleMouseMove28}
              onMouseUp={handleMouseUp28}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease28} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease28} />
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
              onMouseDown={handleMouseDown27}
              onMouseMove={handleMouseMove27}
              onMouseUp={handleMouseUp27}
            />
            <div className='view-360-icons-main'>
              <Stack spacing={2} direction="row" sx={{ mb: 2 }} alignItems="center" justifyContent={'center'}>
                <FiArrowLeft className='left-icon' style={{ cursor: "pointer" }} onClick={handleDecrease27} />
                <FiArrowRight className='right-icon' style={{ cursor: "pointer" }} onClick={handleIncrease27} />
              </Stack>
            </div>
          </>
        )}
      </Box>
     
      </section>
       </div> */}




{/* <----------------------Dual tone---------------------------> */}
{/* <div className="switch-container d-flex justify-content-center">
  <div className='Roadster-color-option-main'>
    <p>Show:</p>
  </div>
  <div class='Roadster-color-option'>
  <input type="radio" id="single-tone" name="color-option" value="event2" checked={selectedEvent2 === 'event2'} onChange={() => setSelectedEvent2('event2')} />
  <label for="single-tone">Single tone</label>
  
  <input type="radio" id="dual-tone" name="color-option" value="event3" checked={selectedEvent2 === 'event3'} onChange={() => setSelectedEvent2('event3')} />
  <label for="dual-tone">Dual tone</label>
</div>
</div> */}
{/* <div className={`col-lg-1 color-palette ${selectedEvent2 === 'event3' ? '' : 'd-none'}`}>
<div className="switch-container d-flex justify-content-center">
  <div className='Roadster-color-option-main'>
    <p>Show:</p>
  </div>
  <div class='Roadster-color-option'>
  <input type="radio" id="single-tone" name="color-option" value="event2" checked={selectedEvent2 === 'event2'} onChange={() => setSelectedEvent2('event2')} />
  <label for="single-tone">Single tone</label>
  
  <input type="radio" id="dual-tone" name="color-option" value="event3" checked={selectedEvent2 === 'event3'} onChange={() => setSelectedEvent2('event3')} />
  <label for="dual-tone">Dual tone</label>
</div>
</div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'RushHourRed' ? 'active' : ''}`}
            onClick={() => handleColorClick4('RushHourRed')}
          >
            <div className={`color-box palette-7-Roadster ${selectedColor4 === 'RushHourRed' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone<span>Rush Hour Red</span></p>
          </div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'LunarWhite' ? 'active' : ''}`}
            onClick={() => handleColorClick4('LunarWhite')}
          >
            <div className={`color-box palette-8-Roadster ${selectedColor4 === 'LunarWhite' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone <span>Lunar White</span></p>
          </div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Forest Green' ? 'active' : ''}`}
            onClick={() => handleColorClick4('Forest Green')}
          >
            <div className={`color-box palette-9-Roadster ${selectedColor4 === 'Forest Green' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone<span>Forest Green</span></p>
          </div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'Crimson' ? 'active' : ''}`}
            onClick={() => handleColorClick4('Crimson')}
          >
            <div className={`color-box palette-10-Roadster ${selectedColor4 === 'Crimson' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone<span>Crimson</span></p>
          </div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'GallantGrey' ? 'active' : ''}`}
            onClick={() => handleColorClick4('GallantGrey')}
          >
            <div className={`color-box palette-11-Roadster ${selectedColor4 === 'GallantGrey' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone <span>Gallant Grey</span></p>
          </div>
          <div
            className={`d-flex align-items-center color-palette-info-2 ${selectedColor4 === 'SinSilver' ? 'active' : ''}`}
            onClick={() => handleColorClick4('SinSilver')}
          >
            <div className={`color-box palette-12-Roadster ${selectedColor4 === 'SinSilver' ? 'active-palette ' : ''} `}></div>
            <p>Dual Tone <span>Sin Silver</span></p>
          </div>
        </div> */}

// <--------------------Dual tone------------------------------->

// <----------------BikeRushHourRed--------------------->

const [number27, setNumber27] = useState(1);
const BikeRushHourRed = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease27 = () => {
  setNumber26((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease27 = () => {
  setNumber26((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging27, setIsDragging27] = useState(false);
const [startX27, setStartX27] = useState(0);

const handleMouseDown27 = (e) => {
  setIsDragging27(true);
  setStartX27(e.clientX);
};

const handleMouseMove27 = (e) => {
  if (isDragging27) {
    const deltaX = e.clientX - startX27;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease27();
      setStartX27(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease27();
      setStartX27(e.clientX);
    }
  }
};

const handleMouseUp27 = () => {
  setIsDragging27(false);
};
// <----------------BikeLunarWhite--------------------->

const [number28, setNumber28] = useState(1);
const BikeLunarWhite = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease28 = () => {
  setNumber28((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease28 = () => {
  setNumber28((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging28, setIsDragging28] = useState(false);
const [startX28, setStartX28] = useState(0);

const handleMouseDown28 = (e) => {
  setIsDragging28(true);
  setStartX28(e.clientX);
};

const handleMouseMove28 = (e) => {
  if (isDragging28) {
    const deltaX = e.clientX - startX28;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease28();
      setStartX28(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease28();
      setStartX28(e.clientX);
    }
  }
};

const handleMouseUp28 = () => {
  setIsDragging28(false);
};
// <----------------BikeForestGreen--------------------->

const [number29, setNumber29] = useState(1);
const  BikeForestGreen = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease29 = () => {
  setNumber29((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease29 = () => {
  setNumber29((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging29, setIsDragging29] = useState(false);
const [startX29, setStartX29] = useState(0);

const handleMouseDown29 = (e) => {
  setIsDragging29(true);
  setStartX29(e.clientX);
};

const handleMouseMove29 = (e) => {
  if (isDragging29) {
    const deltaX = e.clientX - startX29;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease29();
      setStartX29(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease29();
      setStartX29(e.clientX);
    }
  }
};

const handleMouseUp29 = () => {
  setIsDragging29(false);
};

// <----------------BikeCrimson--------------------->

const [number30, setNumber30] = useState(1);
const  BikeCrimson = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease30 = () => {
  setNumber30((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease30 = () => {
  setNumber30((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging30, setIsDragging30] = useState(false);
const [startX30, setStartX30] = useState(0);

const handleMouseDown30 = (e) => {
  setIsDragging30(true);
  setStartX30(e.clientX);
};

const handleMouseMove30 = (e) => {
  if (isDragging30) {
    const deltaX = e.clientX - startX30;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease30();
      setStartX30(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease30();
      setStartX30(e.clientX);
    }
  }
};

const handleMouseUp30 = () => {
  setIsDragging30(false);
};
// <----------------BikeGallantGrey--------------------->

const [number31, setNumber31] = useState(1);
const  BikeGallantGrey = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease31 = () => {
  setNumber31((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease31 = () => {
  setNumber31((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging31, setIsDragging31] = useState(false);
const [startX31, setStartX31] = useState(0);

const handleMouseDown31 = (e) => {
  setIsDragging31(true);
  setStartX31(e.clientX);
};

const handleMouseMove31 = (e) => {
  if (isDragging31) {
    const deltaX = e.clientX - startX31;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease31();
      setStartX31(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease31();
      setStartX31(e.clientX);
    }
  }
};

const handleMouseUp31 = () => {
  setIsDragging31(false);
};
// <----------------BikeGallantGrey--------------------->

const [number34, setNumber34] = useState(1);
const  BikeSinSilver = require(`../Components/assets/j-bike/Roadster/Roadster-SteelBlue/bike-${number26}.png`)


const handleDecrease34 = () => {
  setNumber34((prevNumber) => Math.max(1, prevNumber - 1));
};

const handleIncrease34 = () => {
  setNumber34((prevNumber) => Math.min(16, prevNumber + 1));
};

const [isDragging34, setIsDragging34] = useState(false);
const [startX34, setStartX34] = useState(0);

const handleMouseDown34 = (e) => {
  setIsDragging34(true);
  setStartX34(e.clientX);
};

const handleMouseMove34 = (e) => {
  if (isDragging34) {
    const deltaX = e.clientX - startX34;
    const sensitivity = 5;
    if (deltaX > sensitivity) {
      handleIncrease34();
      setStartX34(e.clientX);
    } else if (deltaX < -sensitivity) {
      handleDecrease34();
      setStartX34(e.clientX);
    }
  }
};

const handleMouseUp34 = () => {
  setIsDragging34(false);
};



    {/* <div className="mb-3">
              <label className="form-check-label d-block">Where do you want to have Your Test Ride?</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Home"
                  value="Home"
                  checked={formData.Ride === 'Home'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Home">Home</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Office"
                  value="Office"
                  checked={formData.Ride === 'Office'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Office">Office</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Ride"
                  id="Dealership"
                  value="Dealership"
                  checked={formData.Ride === 'Dealership'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Dealership">Dealership</label>
              </div>
            </div> */}
