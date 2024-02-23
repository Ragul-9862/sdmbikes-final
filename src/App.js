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
import Navbar from './Components/JawaMotorcycle/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
