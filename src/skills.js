import React from 'react';
import './Home.css';
import backgroundVideo from './images/back.mp4'; // Replace with actual path
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Certificate data
const certificates = [
    {
    image: require('./certificates/15.png'),
    title: 'Programming in Python by University of Moratuwa',
    verificationUrl: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=39990&code=m1DSExAggt&qrcode=1',
    credentialId: 'm1DSExAggt'
    },
    {
    image: require('./certificates/1.png'),
    title: 'Data Science & Analysis by HP',
    verificationUrl: 'https://www.life-global.org/certificate/7859ee35-67bd-4b30-9d84-1749465389b9',
    credentialId: '7859ee35-67bd-4b30-9d84-1749465389b9'
  },
  {
    image: require('./certificates/2.png'),
    title: 'Artificial Intelligence for Social Impact',
    verificationUrl: 'https://elearning-adbi.org/certificate-verifier/?code=108680-172-355-1285',
    credentialId: '108680-172-355-1285'
  },
  {
    image: require('./certificates/11.png'),
    title: 'CS50P - Introduction to Programming with Python by Harvard University',
    verificationUrl: 'https://certificates.cs50.io/d0126b33-eb34-4a6d-b909-07b12e59ce73.pdf?size=letter',
    credentialId: 'd0126b33-eb34-4a6d-b909-07b12e59ce73'
  },
  {
    image: require('./certificates/4.png'),
    title: 'Introduction to Cyberscurity by Cisco',
    verificationUrl: 'https://www.credly.com/badges/1126a3d9-9bd4-49e4-9ab1-1e47265384ee/public_url',
    credentialId: '1126a3d9-9bd4-49e4-9ab1-1e47265384ee'
  },
  {
    image: require('./certificates/5.png'),
    title: 'WIOSEC Short Video Competition',
    verificationUrl: 'NONE',
    credentialId: 'Participation Certificate Only'
  },
  {
    image: require('./certificates/6.png'),
    title: 'C++ Intermediate by SoloLearn',
    verificationUrl: 'https://www.sololearn.com/en/certificates/CC-KSHV4R7Z',
    credentialId: 'CC-KSHV4R7Z'
  },
  {
    image: require('./certificates/7.png'),
    title: 'MATLAB Onramp by MathWorks',
    verificationUrl: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a1ede64b-043f-4614-9dfc-0612b3c97a01&',
    credentialId: 'a1ede64b-043f-4614-9dfc-0612b3c97a01'
  },
  {
    image: require('./certificates/8.png'),
    title: 'Sparklink Participation Certificate',
    verificationUrl: 'NONE',
    credentialId: '-'
  },
  {
    image: require('./certificates/9.png'),
    title: 'Introduction to Java by SoloLearn',
    verificationUrl: 'https://www.sololearn.com/en/certificates/CC-DRYDJUMJ',
    credentialId: 'CC-DRYDJUMJ'
  },
  {
    image: require('./certificates/10.png'),
    title: 'MySQL Tutorial by Great Learning',
    verificationUrl: 'https://www.mygreatlearning.com/certificate/KIWUMZCC',
    credentialId: 'KIWUMZCC'
  },
  {
    image: require('./certificates/3.png'),
    title: 'Engaging Stakeholders for Success by Cisco',
    verificationUrl: 'https://www.credly.com/badges/c3674d69-944f-46ce-8f8d-31572bd89b23/public_url',
    credentialId: 'c3674d69-944f-46ce-8f8d-31572bd89b23'
  },
  {
    image: require('./certificates/12.png'),
    title: 'Python for Beginners by University of Moratuwa',
    verificationUrl: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=GP2uvEVwU9&qrcode=1',
    credentialId: 'GP2uvEVwU9'
  },
  {
    image: require('./certificates/13.png'),
    title: 'PixelCut Participation Certificate',
    verificationUrl: 'https://www.youtube.com/shorts/HoVj8sOaqtE',
    credentialId: '-'
  },
  {
    image: require('./certificates/14.png'),
    title: 'MoraXtreme 9.0 Participation Certificate',
    verificationUrl: 'None',
    credentialId: '-'
  },
];

function Skills() {
  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Certificates Section */}
      <div className="certificates-section">
        <h2>Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img src={cert.image} alt={cert.title} className="certificate-image" />
              <h3>{cert.title}</h3>
              <p>Credential ID: {cert.credentialId}</p>
              <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="verify-button">
                Verify Certificate
              </a>
            </div>
          ))}
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

export default Skills;
