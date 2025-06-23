import React, { useState } from 'react';
import './UniversityLife.css';
import backgroundVideo from './images/back.mp4';

import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const images = [
  { src: require('./uni_images/image22.jpg'), caption:'CodeX Champions' },
  { src: require('./uni_images/221.jpg'), caption: 'CodeX Champions' },
  { src: require('./uni_images/image19.jpg'), caption: 'BITCODE 2nd Runners Up' },
  { src: require('./uni_images/image17.jpg'), caption: 'BITCODE 2nd Runners Up' },
  { src: require('./uni_images/image23.jpg'), caption: 'IEEE SB ExCom 24/25' },
  { src: require('./uni_images/image24.jpg'), caption: 'IEEE SB ExCom 24/25' },
  { src: require('./uni_images/image21.jpg'), caption: 'විභාවි ගද්‍ය හා පද්‍ය අංශ දෙකෙහිම පළමු ස්ථානය' },
  { src: require('./uni_images/image20.jpg'), caption: 'විභාවි ගද්‍ය හා පද්‍ය අංශ දෙකෙහිම පළමු ස්ථානය' },
  { src: require('./uni_images/image18.jpg'), caption: 'Melodies of Joy - EFAC Carols Service' },
  { src: require('./uni_images/image0.jpg'), caption: 'යාමයක අරුමැසිය' },
  { src: require('./uni_images/image01.jpg'), caption: 'යාමයක අරුමැසිය' },
  { src: require('./uni_images/image26.jpg'), caption: 'Drama Crew - පැදුර 2025' },
  { src: require('./uni_images/image2.jpg'), caption: 'HaXtreme 3.0' },
  { src: require('./uni_images/image3.jpg'), caption: 'VoltCast 1.0' },
  { src: require('./uni_images/image5.jpg'), caption: 'Extasis English' },
  { src: require('./uni_images/image15.jpg'), caption: 'මෙහෙවර' },
  { src: require('./uni_images/image25.jpg'), caption: 'මෙහෙවර' },
  { src: require('./uni_images/image14.jpg'), caption: 'Red Cypher 1.0' },
  { src: require('./uni_images/image6.jpg'), caption: 'Gavel Club' },
  { src: require('./uni_images/image13.jpg'), caption: 'Eminence 4.0 Organizing Committee' },
  { src: require('./uni_images/image16.jpg'), caption: 'VoltCast 1.0 Organizing Committee' },
  { src: require('./uni_images/image12.jpg'), caption: '2nd Semester Lab Group' },
  { src: require('./uni_images/image8.jpg'), caption: 'Presentation Group' },
  { src: require('./uni_images/image9.jpg'), caption: 'HaXtreme 2.0' },
  { src: require('./uni_images/image7.jpg'), caption: '1st Semester Lab Group' },
  { src: require('./uni_images/image1.jpg'), caption: 'පිරිත 2024' },
  { src: require('./uni_images/image4.jpg'), caption: 'පිරිත 2024' },
  { src: require('./uni_images/image10.jpg'), caption: 'භාස Live in Concert' },
  { src: require('./uni_images/image11.jpg'), caption: 'වැල්ලමඩම පරිශ්‍රය' },
  
  
];

function UniversityLife() {
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

export default UniversityLife;

//
