import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Home.css';
import backgroundVideo from './images/back.mp4';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_822esgh', 'template_fbb3q2y', form.current, 'JrDZ-k-_ELvYZ90c3')
      .then((result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
      }, (error) => {
          alert("An error occurred, Please try again", error.text);
      });
    e.target.reset(); // Clear the form fields after submission
  };

  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="content">
        <h2>Contact Me:-  </h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <p><input type="text" name="user_name" required /></p>
          
          <p><label>Email</label></p>
          <input type="email" name="user_email" required />
          
          <p><label>Message</label></p>
          <textarea name="message" required />
          
          <p><button type="submit">Send</button></p>
        </form>
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
              <span className="username">@TTennekoon</span>
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

export default Contact;
