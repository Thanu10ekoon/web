import React from 'react';
import './Home.css';
import profileImage from './images/propic.jpg'; // Replace with actual path
import backgroundVideo from './images/back.mp4'; // Replace with actual path


// Add imports for icons (assuming you use a library like FontAwesome)
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="profile-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="description">
          <p>
            I am a dedicated Computer Engineering undergraduate at the University of Ruhuna - Faculty of Engineering under the Department of Electrical & Information Engineering, where I am honing my skills and knowledge in various disciplines. Recognized by my peers as a natural leader, I possess the ability to swiftly adapt to challenges and lead by example. Equally adept at being a team player, I deeply value collaboration and believe in respecting and supporting leadership decisions while contributing innovative ideas for improvement. As a versatile individual, I thrive on balancing multiple priorities and continuously seek out new opportunities for growth and learning.
          </p>
        </div>
      </div>

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

export default Home;
