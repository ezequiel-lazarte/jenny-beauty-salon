import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Trabajos from './components/Trabajos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <nav className='Menu'>
            <Link className='link' to="/">Inicio</Link>
          
            <Link className='link' to="/sobre-mi">Sobre Mi</Link>
          
            <Link className='link' to="/trabajos">Trabajos</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/trabajos" element={<Trabajos />}/>
        </Routes>
        
        <Footer />
      </Router>

      
    </>
  );
}

export default App;
