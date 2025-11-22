import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UniversityLife from './UniversityLife';
import SclLife from './SclLife';
import Volu from './Volun';
import Skills from './skills';
import Contact from './contact';
import { LightboxProvider } from './components/Lightbox';

import './styles/theme.css';
import './App.css';

const navLinks = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/skills' },
  { label: 'University', path: '/universitylife' },
  { label: 'School', path: '/scllife' },
  { label: 'Volunteering', path: '/volun' },
  { label: 'Contact', path: '/contact' }
];

const socialLinks = [
  { icon: <FaGithub />, label: 'Thanu10ekoon', url: 'https://github.com/Thanu10ekoon' },
  { icon: <FaLinkedin />, label: 'Thanujaya Tennekoon', url: 'https://www.linkedin.com/in/thanujaya-tennekoon-b9a155271/' },
  { icon: <FaTwitter />, label: '@TTennkoon', url: 'https://x.com/TTennekoon' },
  { icon: <FaFacebook />, label: 'Thanujaya Tennekoon', url: 'https://www.facebook.com/thanu.ten.5' },
  { icon: <FaEnvelope />, label: 'thanujayaabtennekoon@gmail.com', url: 'mailto:thanujayaabtennekoon@gmail.com' }
];

function App() {
  return (
    <Router>
      <LightboxProvider>
        <div className="app-shell">
          <Navbar links={navLinks} />
          <main className="app-main">
            <div className="app-max-width">
              <Routes>
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
          </main>
          <footer className="app-footer">
            <div className="app-max-width footer-content">
              <p>Crafted with curiosity, service, and continuous learning.</p>
              <div className="social-row">
                {socialLinks.map((item) => (
                  <a key={item.label} className="social-button" href={item.url} target="_blank" rel="noreferrer noopener">
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
              <small>© {new Date().getFullYear()} Thanujaya Tennekoon · Updated for a modern era.</small>
            </div>
          </footer>
        </div>
      </LightboxProvider>
    </Router>
  );
}

export default App;
