import React, { useState } from 'react';
import './UniversityLife.css';
import backgroundVideo from './images/back.mp4';

import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const images = [
  { src: require('./scl_images/image0.jpg'), caption: '' },
  { src: require('./scl_images/image1.jpg'), caption: '' },
  { src: require('./scl_images/image2.jpg'), caption: '' },
  { src: require('./scl_images/image3.jpg'), caption: '' },
  { src: require('./scl_images/image4.jpg'), caption: '' },
  { src: require('./scl_images/image5.jpg'), caption: '' },
  { src: require('./scl_images/image6.jpg'), caption: '' },
  { src: require('./scl_images/image7.jpg'), caption: '' },
  { src: require('./scl_images/image8.jpg'), caption: '' },
  { src: require('./scl_images/image81.jpg'), caption: '' },
  { src: require('./scl_images/image9.jpg'), caption: '' },
  { src: require('./scl_images/image10.jpg'), caption: '' },
  { src: require('./scl_images/image11.jpg'), caption: '' },
  { src: require('./scl_images/image12.jpg'), caption: '' },
  { src: require('./scl_images/image13.jpg'), caption: '' },
  { src: require('./scl_images/image14.jpg'), caption: '' },
  { src: require('./scl_images/image15.jpg'), caption: '' },
  { src: require('./scl_images/image16.jpg'), caption: '' },

  // Add more images as needed
];

function SclLife() {
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

export default SclLife;
