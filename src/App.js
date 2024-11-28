import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './Navbar';
import Home from './Home';
import About from './About'; // Import the About component
import UniversityLife from './UniversityLife';
import SclLife from './SclLife';
import Volu from './Volun';
import Skills from './skills';
import Contact from './contact';


import './Home.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/universitylife" element={<UniversityLife />} />
          <Route path="/scllife" element={<SclLife />} />
          <Route path="/volun" element={<Volu />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;
