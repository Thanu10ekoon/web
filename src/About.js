import React from 'react';
import './About.css';  // Import the corresponding CSS file
import backgroundVideo from './images/back.mp4';
import Badge from './images/annes.png';
import Badge2 from './images/Maliyadeva.png';
import Badge3 from './images/ruhuna.gif';
import Badge4 from './images/efac.png';

import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
        <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>About Me</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Born in 2002</h3>
            <p>This is where my journey began. Born in 2002, I spent first few years of my life in beautiful Ampara district which was a wartone area at that time. But the time in there was exciting with my family.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Kawanthissa M.V - Ampara</h3>
            <p>I started my educational journey at Kawanthissa M.V in Ampara district, where I laid the foundation for my academic growth.Then I had to go to St.Bernadette's Model School in Polagahavela and Bandaranayake Model Primary School respectivaley as my family have moved from Ampara to Polgahawela</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>St. Anne's College</h3>
            <div className="badge">
                <img src={Badge} alt="St.Anne's" />
            </div>
            <p>After excelling in the Grade 5 Scholarship, I joined St. Anne’s College, Kurunegala—a historic school over 150 years old. I completed my G.C.E. O/Ls there with 8 As and 1 B and took on various leadership roles, including leading the debate team, captaining our pentathlon team for the national TV show 'Sirasa Pentathlon,' and becoming a state champion in public speaking. As Chief Editor of the school media unit, I also performed in stage dramas, played in the orchestra, and participated in quizzes, experiences that shaped my personality and eliminated any stage fear.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Maliyadeva College</h3>
            <div className="badge1">
                <img src={Badge2} alt="Maliyadeva" />
            </div>
            <p>Following high achievements in my G.C.E. O/Ls, I was selected for Maliyadeva College, one of the most prominent school in Sri Lanka. I completed my A/Ls there with top results, earning admission to the Faculty of Engineering at the University of Ruhuna, one of Sri Lanka’s top three engineering faculties. At Maliyadeva, I took on leadership roles as Vice President of the Research Unit and Language Coordinator of the Media Unit, while actively participating in the science, IT, and Buddhist societies.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>University of Ruhuna</h2>
            <h3>Faculty of Engineering</h3>
            <div className="badge3">
                <img src={Badge3} alt="Ruhuna_Logo" />
                <img src={Badge4} alt="EFAC_logo"/>
            </div>
            
            <p>In my first year, I achieved a high OGPA, placing me in the top 50 of my batch. This allowed me to select any discipline I preferred, so I chose the Computer Engineering sub-discipline under the Department of Electrical & Information Engineering, aligning with my passion. Alongside academics, I’m making the most of university life by immersing myself in acting, writing poetry, and volunteering with IEEE.</p>
          </div>
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

export default About;
