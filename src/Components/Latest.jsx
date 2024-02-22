import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import img1 from '../Components/assets/j-bike/bike-5.png';
import img2 from '../Components/assets/Navbar/Roadster-banner.png';
import img3 from '../Components/assets/Navbar/Adventure-banner.png';
import "./latest.css"

const slides = [
  {
    id: 1,
    img: img1,
    text: 'SCRAMBLER',
    info1: "Off Roading",
    info2: "Daily Commute",
    info3: "Touring",
    info4: "Rally",
    num: "01"
  },
  {
    id: 2,
    img: img2,
    text: 'ROADSTER',
    info1: "City Cruising",
    info2: "Urban Lifestyle",
    info3: "Style and Comfort",
    info4: "Efficiency",
    num: "02"
  },
  {
    id: 3,
    img: img3,
    text: 'ADVENTURE',
    info1: "Off Road Trails",
    info2: "Long Expeditions",
    info3: "Exploring Nature",
    info4: "Versatility",
    num: "03"
  },
];

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      updateProgress();
      animateText();
      animateText2();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      updateProgress();
      animateText();
      animateText2();
    }
  };

  const updateProgress = () => {
    const calc = ((currentSlide + 1) / slides.length) * 100;
    setProgress(calc);
  };

  const getColorBasedOnProgress = () => {
    const progressPercentage = (currentSlide + 1) / slides.length;
    if (progressPercentage <= 1 / 3) {
      return currentSlide === 0 ? 'grey' : 'white';
    } else if (progressPercentage <= 2 / 3) {
      return currentSlide === 1 ? 'grey' : 'white';
    } else {
      return currentSlide === 2 ? 'grey' : 'white';
    }
  };
  const progressBarStyle = {
    width: `${progress}%`,
    backgroundColor: getColorBasedOnProgress(),
    border: '1px solid grey',
    paddingRight: '5px',
    transition: 'width 0.2s ease-in-out, background-color 0.2s ease-in-out',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      updateProgress();
      animateText();
      animateText2();
    },
  };

  const animateText = () => {
    const scramblerLeft = document.getElementById("scramblerLeft");
    scramblerLeft.classList.remove("slide-in-left");
    void scramblerLeft.offsetWidth; 
    scramblerLeft.classList.add("slide-in-left");
  };

  const animateText2 = () => {
    const scramblerRight = document.getElementById("scramblerRight");
    scramblerRight.classList.remove("slide-in-right");
    void scramblerRight.offsetWidth; 
    scramblerRight.classList.add("slide-in-right");
  };

  return (
    <div className='banner-slider'>
      <section className='container-fluid banner' >
        <div className='banner-info-icon-1'>
        <div className='banner-info-icon-main-1'>
            <a href="#" className="side-button">
                <span className="icon"><img src={require("../Components/assets/Navbar/Phone iCon-2.png")} alt=""/></span>
                <span className="texted">Phone</span>
            </a>
        </div>
        </div>
        <div className='banner-info-icon-2'>
        <div className='banner-info-icon-main-2'>
            <a href="#" className="side-button-2">
            <span className="icon"><img src={require("../Components/assets/Navbar/Phone iCon.png")} alt=""/></span>
                <span className="texted">Whatsapps</span>
            </a>
        </div>
        </div>
      
      
     
        <div className='row'>
          <div className='col-lg-2 d-none d-lg-block bike-type'>
            <h1>Bike type</h1>
            <hr />
            <p>{slides[currentSlide].info1}</p>
            <p>{slides[currentSlide].info2}</p>
            <p>{slides[currentSlide].info3}</p>
            <p>{slides[currentSlide].info4}</p>
          </div>
          <div className='col-lg-8'>
            <div className="vertical-carousel-container d-flex align-items-center justify-content-center">
              <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                    <img className='img-fluid' src={slide.img} alt={`Slide ${slide.id}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className='banner-text-main'>
              <div className='banner-text'>
                <h2 id="scramblerRight" className='text scramble-animation  slide-in-right'>
                  {slides[currentSlide].text}
                </h2>
              </div>
            </div>
            <div className='banner-text-main'>
              <div className='banner-text'>
                <h2 id="scramblerLeft" className='text scramble-animation  slide-in-left ' >
                  {slides[currentSlide].text}
                </h2>
              </div>
            </div>
            <div className='navigation-controls-main d-none d-lg-block'>
              <div className='navigation-controls'>
                <div className="carousel-controls d-flex justify-content-center align-items-center  " >
                  <FiArrowLeft className='icon-left  d-none d-lg-block mr-3' onClick={goToPrevSlide} /> <p className='progress-info' >{slides[currentSlide].num}</p> 
                  <div className="progress mr-3" style={{ width: '50%', overflow: 'hidden' }}>
                    <div style={progressBarStyle}></div>
                  </div>
                  <FiArrowRight className='icon-right  d-none d-lg-block' onClick={goToNextSlide} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerticalCarousel;
