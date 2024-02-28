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
import Emicalculators from './Components/Motorcycle/Emicalculators';

function App() {
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
            {/* <Route path="/" element={<Emicalculators />} /> */}

            <Route path="/Motorcycle" element={<MotorcyclePage />} />
            <Route path="/Kommuniti" element={<KommunitiPage />} />
            <Route path="/ContactUs" element={<ContactUsPage />} />
            <Route path="/EmiCalculator" element={<EmiCalculatorPage />} />
            <Route path="/HomePageJawa" element={<HomePageJawa />} />
            <Route path="/MotorcycleJawa" element={<Motorcyclejawa />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
