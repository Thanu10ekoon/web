import React, { useState } from 'react';
import './volun.css';
import backgroundVideo from './images/back.mp4';

import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const images = [
  { src: require('./Volu_images/1.jpg'), caption: "IEEE Volunteers of the Month for the July' 2024 "},
  { src: require('./Volu_images/image24.jpg'), caption: "IEEE SB ExCom "},
  { src: require('./Volu_images/2.jpg'), caption: 'Axiom 2.0 Organizing Committee' },
  { src: require('./Volu_images/3.jpg'), caption: 'Eminence 4.0 Organizing Committee' },
  { src: require('./Volu_images/4.jpg'), caption: 'Eminence 4.0' },
  { src: require('./Volu_images/5.jpg'), caption: 'VoltCast 1.0 Organizing Committee' },
  { src: require('./Volu_images/6.jpg'), caption: '' },
  { src: require('./Volu_images/7.jpg'), caption: 'INSPIRE Crew 2024/25' },
  { src: require('./Volu_images/8.jpg'), caption: 'eSCiRo Organizing Committee' },
  { src: require('./Volu_images/9.jpg'), caption: 'VoltCast 1.0 Organizing Committee' },
  { src: require('./Volu_images/10.jpg'), caption: 'IEEE EDC 2023' },
  { src: require('./Volu_images/11.jpg'), caption: 'IEEE SL Awards - Best Affinity Group Project Award' },


  // Add more images as needed
];

function Volu() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
        <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="image-wrapper">
        <button className="prev-button" onClick={prevImage}>&#10094;</button>
        <img src={images[currentIndex].src} alt="Gallery" className="gallery-image" />
        <button className="next-button" onClick={nextImage}>&#10095;</button>
      </div>
      <p className="caption">{images[currentIndex].caption}</p>
    
          {/* Footer Section */}
<footer className="footer">
  <div className="footer-content">
    <div className="social-links">
      <a href="https://github.com/Thanu10ekoon" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} />
        <span className="username">Thanu10ekoon</span>
      </a>
      <a href="https://www.facebook.com/thanu.ten.5" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
        <span className="username">Thanujaya Tennekoon</span>
      </a>
      <a href="https://www.linkedin.com/in/thanujaya-tennekoon-b9a155271/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} />
        <span className="username">Thanujaya Tennekoon</span>
      </a>
      <a href="https://x.com/TTennekoon" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
        <span className="username">@TTennkoon</span>
      </a>
      <a href="mailto:thanujayaabtennekoon@gmail.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope size={30} />
        <span className="username">thanujayaabtennekoon@gmail.com</span>
      </a>
    </div>
  </div>
</footer>
    </div>
    
  );
}

export default Volu;