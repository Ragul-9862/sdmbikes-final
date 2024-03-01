import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from './Components/Loading';
import HomePage from './Pages/HomePage';
import MotorcyclePage from '../src/Pages/MotorcyclePage';
import KommunitiPage from '../src/Pages/KommunitiPage';
import ContactUsPage from './Pages/ContactUsPage';
import HomePageJawa from './Pages/JawaMotorcycle/HomePageJawa';
import Motorcyclejawa from './Pages/JawaMotorcycle/Motorcyclejawa';
import EmiCalculatorPage from './Pages/EmiCalculatorPage';
import EmiCalculatorPageJawa from './Pages/JawaMotorcycle/EmiCalculatorPageJawa';
import ContactUsPageJawa from './Pages/JawaMotorcycle/ContactUsPageJawa';
import KommunitiPageJawa from './Pages/JawaMotorcycle/KommunitiPageJawa';

function App() {
  useEffect(() => {
    // Function to force reload of resources
    const clearCache = () => {
      // Append a random query parameter to the URL of static resources
      const scripts = document.querySelectorAll('script');
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      const images = document.querySelectorAll('img');

      [scripts, links, images].forEach(nodes => {
        nodes.forEach(node => {
          const src = node.getAttribute('src') || node.getAttribute('href');
          if (src) {
            node.setAttribute('src', `${src}?v=${new Date().getTime()}`);
          }
        });
      });
    };

    // Call the clearCache function when the component mounts
    clearCache();
  }, []); // Run only once when the component mounts



  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Motorcycle" element={<MotorcyclePage />} />
            <Route path="/Kommuniti" element={<KommunitiPage />} />
            <Route path="/ContactUs" element={<ContactUsPage />} />
            <Route path="/EmiCalculator" element={<EmiCalculatorPage />} />
            <Route path="/HomePageJawa" element={<HomePageJawa />} />
            <Route path="/MotorcycleJawa" element={<Motorcyclejawa />} />
            <Route path="/EmiCalculatorPageJawa" element={<EmiCalculatorPageJawa />} />
            <Route path="/ContactUsPageJawa" element={<ContactUsPageJawa />} />
            <Route path="/KommunitiPageJawa" element={<KommunitiPageJawa/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
