import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { useRef, useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import img1 from '../assets/j-bike/Jawa-350/Maroon/bike-1.png';
import img2 from '../assets/j-bike/42/CosmicCarbon/bike-1.png';
import img3 from '../assets/j-bike/Bobber/BlackMirror/bike-1.png';
import img4 from '../assets/j-bike/Perak/bike-1.png';

import './Banner.css';

const slides = [
  {
    id: 1,
    img: img1,
    text: 'JAWA 350',
    info1: 'Classic Design',
    info2: 'Reliable Performance',
    info3: 'Versatile Riding Modes',
    info4: 'Heritage and Legacy',
    num: '01',
  },
  {
    id: 2,
    img: img2,
    text: '42',
    info1: 'Modern Retro Design',
    info2: 'Accessible Performance',
    info3: 'Customization Option',
    info4: 'Technological Featuresy',
    num: '02',
  },
  {
    id: 3,
    img: img3,
    text: '42 bobber',
    info1: 'Powerful Performance',
    info2: 'Advanced Features',
    info3: 'Versatile Riding Dynamics',
    info4: 'Distinctive Styling',
    num: '03',
  },
  {
    id: 4,
    img: img4,
    text: 'Perak',
    info1: 'Bobber Styling',
    info2: 'Powerful Engine',
    info3: 'Modern Features',
    info4: 'Customization Potential',
    num: '04',
  },
];

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0); 
  const sliderRef = useRef(null);

  useEffect(() => {
    updateProgress(); 
  }, []);

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
    const slideCount = slides.length;
    const slideIndex = currentSlide % slideCount;
  
    if (progressPercentage <= 1 / slideCount) {
      return currentSlide === slideIndex ? 'grey' : 'white';
    } else if (progressPercentage <= 2 / slideCount) {
      return currentSlide === slideIndex + 1 ? 'grey' : 'grey';
    } else if (progressPercentage <= 3 / slideCount) {
      return currentSlide === slideIndex + 2 ? 'grey' : 'grey';
    } else {
      return currentSlide === slideIndex + 3 ? 'grey' : 'grey';
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
    const scramblerLeft = document.getElementById('scramblerLeft');
    scramblerLeft.classList.remove('slide-in-left');
    void scramblerLeft.offsetWidth;
    scramblerLeft.classList.add('slide-in-left');
  };

  const animateText2 = () => {
    const scramblerRight = document.getElementById('scramblerRight');
    scramblerRight.classList.remove('slide-in-right');
    void scramblerRight.offsetWidth;
    scramblerRight.classList.add('slide-in-right');
  };

  return (
    <div className="banner-slider">
      <section className="container-fluid banner">
        <div className="banner-info-icon-1">
          <div className="banner-info-icon-main-1">
            <a href="#" className="side-button">
              <span className="icon">
                <img src={require('../assets/Navbar/Phone iCon-2.png')} alt="" />
              </span>
              <span className="texted">Phone</span>
            </a>
          </div>
        </div>
        <div className="banner-info-icon-2">
          <div className="banner-info-icon-main-2">
          <a href="https://wa.me/9876543210" className="side-button-2">
              <span className="icon">
                <img src={require('../assets/Navbar/Phone iCon.png')} alt="" />
              </span>
              <span className="texted">Whatsapp</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block bike-type">
            <h1>Bike type</h1>
            <hr />
            <p>{slides[currentSlide].info1}</p>
            <p>{slides[currentSlide].info2}</p>
            <p>{slides[currentSlide].info3}</p>
            <p>{slides[currentSlide].info4}</p>
          </div>
          <div className="col-lg-8">
            <div className="vertical-carousel-container d-flex align-items-center justify-content-center">
              <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                  <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                    <img className="img-fluid jawa-banner-img" src={slide.img} alt={`Slide ${slide.id}`} />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={`banner-text-main ${currentSlide === 0 || currentSlide === 2 ? 'align-left' : ''}`}>
  <div className={`banner-text ${currentSlide === 0 ? 'text-class-1 text-class-2' : ''}`}>
    <h2 id="scramblerRight" className="text scramble-animation slide-in-right">
      {slides[currentSlide].text}
    </h2>
  </div>
</div>
            <div className={`banner-text-main ${currentSlide === 0 || currentSlide === 2 ? 'align-left' : ''}`}>
  <div className={`banner-text ${currentSlide === 0 ? ' text-class-2' : ''}`}>
    <h2 id="scramblerLeft" className="text scramble-animation slide-in-left">
      {slides[currentSlide].text}
    </h2>
  </div>
</div>
<div className={`banner-text-main ${currentSlide === 0 || currentSlide === 2 ? 'align-left' : ''}`}>
  <div className={`banner-text ${currentSlide === 2 ? 'text-class- text-class-4' : ''}`}>
    <h2 id="scramblerLeft" className="text scramble-animation slide-in-left">
      {slides[currentSlide].text}
    </h2>
  </div>
</div>
<div className={`banner-text-main ${currentSlide === 0 || currentSlide === 2 ? 'align-left' : ''}`}>
  <div className={`banner-text    ${currentSlide === 2 ? 'text-class-4' : ''} `}>
    <h2 id="scramblerRight" className="text scramble-animation slide-in-right">
      {slides[currentSlide].text}
    </h2>
  </div>
</div>

            <div className="navigation-controls-main d-none d-lg-block">
              <div className="navigation-controls">
                <div className="carousel-controls d-flex justify-content-center align-items-center">
                  <FiArrowLeft className="icon-left d-none d-lg-block mr-3" onClick={goToPrevSlide} />
                  <p className="progress-info">{slides[currentSlide].num}</p>
                  <div className="progress mr-3" style={{ width: '100%', overflow: 'hidden' }}>
                    <div style={progressBarStyle}></div>
                  </div>
                  <FiArrowRight className="icon-right d-none d-lg-block" onClick={goToNextSlide} />
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
