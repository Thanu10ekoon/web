import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import backgroundVideo from './images/back.mp4';
import heroPoster from './images/propic.jpg';
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const contacts = [
  { icon: <FaEnvelope />, label: 'Email', value: 'thanujayaabtennekoon@gmail.com', url: 'mailto:thanujayaabtennekoon@gmail.com' },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'Thanujaya Tennekoon', url: 'https://www.linkedin.com/in/thanujaya-tennekoon-b9a155271/' },
  { icon: <FaGithub />, label: 'GitHub', value: 'Thanu10ekoon', url: 'https://github.com/Thanu10ekoon' },
  { icon: <FaTwitter />, label: 'X', value: '@TTennkoon', url: 'https://x.com/TTennekoon' },
  { icon: <FaFacebook />, label: 'Facebook', value: 'Thanujaya Tennekoon', url: 'https://www.facebook.com/thanu.ten.5' }
];

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs
      .sendForm('service_822esgh', 'template_fbb3q2y', form.current, 'JrDZ-k-_ELvYZ90c3')
      .then(() => {
        setStatus('Message sent! I will get back to you shortly.');
        e.target.reset();
      })
      .catch(() => setStatus('Something went wrong. Please try again.'));
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <video autoPlay loop muted playsInline poster={heroPoster}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="contact-hero-overlay">
          <span className="tag-chip">Let's collaborate</span>
          <h1>Send a note — I read every message.</h1>
          <p>Whether it is a project idea, volunteering opportunity, or a poetry exchange, I’d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-grid">
        <div className="glass-panel contact-info">
          <div className="section-heading">
            <span>Direct lines</span>
            <h2>Stay in touch</h2>
          </div>
          <div className="contact-info-cards">
            {contacts.map((item) => (
              <a key={item.value} href={item.url} target="_blank" rel="noreferrer noopener">
                {item.icon}
                <div>
                  <small>{item.label}</small>
                  <p>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form ref={form} className="glass-panel contact-form" onSubmit={sendEmail}>
          <div className="section-heading">
            <span>Message</span>
            <h2>Share your story</h2>
          </div>
          <label htmlFor="user_name">Name</label>
          <input id="user_name" type="text" name="user_name" required />

          <label htmlFor="user_email">Email</label>
          <input id="user_email" type="email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit" className="cta-button primary">Send message</button>
          {status && <span className="status-text">{status}</span>}
        </form>
      </section>
    </div>
  );
}

export default Contact;
