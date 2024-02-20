
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage';
import MotorcyclePage from '../src/Pages/MotorcyclePage'
import  KommunitiPage from '../src/Pages/KommunitiPage'
import ContactUsPage from './Pages/ContactUsPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Motorcycle' element={<MotorcyclePage/>}/>
        <Route path='/Kommuniti' element={<KommunitiPage/>}/>
        <Route path='/ContactUs' element={<ContactUsPage/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
