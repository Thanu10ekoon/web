import React from 'react';
import './skills.css';
import { useLightbox } from './components/Lightbox';

const certificates = [
  {
    image: require('./certificates/15.png'),
    title: 'Programming in Python · University of Moratuwa',
    verificationUrl:
      'https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=39990&code=m1DSExAggt&qrcode=1',
    credentialId: 'm1DSExAggt',
    category: 'Tech'
  },
  {
    image: require('./certificates/1.png'),
    title: 'Data Science & Analysis · HP LIFE',
    verificationUrl: 'https://www.life-global.org/certificate/7859ee35-67bd-4b30-9d84-1749465389b9',
    credentialId: '7859ee35-67bd-4b30-9d84-1749465389b9',
    category: 'Tech'
  },
  {
    image: require('./certificates/2.png'),
    title: 'Artificial Intelligence for Social Impact',
    verificationUrl: 'https://elearning-adbi.org/certificate-verifier/?code=108680-172-355-1285',
    credentialId: '108680-172-355-1285',
    category: 'Impact'
  },
  {
    image: require('./certificates/11.png'),
    title: 'CS50P · Harvard University',
    verificationUrl: 'https://certificates.cs50.io/d0126b33-eb34-4a6d-b909-07b12e59ce73.pdf?size=letter',
    credentialId: 'd0126b33-eb34-4a6d-b909-07b12e59ce73',
    category: 'Tech'
  },
  {
    image: require('./certificates/4.png'),
    title: 'Introduction to Cybersecurity · Cisco',
    verificationUrl: 'https://www.credly.com/badges/1126a3d9-9bd4-49e4-9ab1-1e47265384ee/public_url',
    credentialId: '1126a3d9-9bd4-49e4-9ab1-1e47265384ee',
    category: 'Security'
  },
  {
    image: require('./certificates/5.png'),
    title: 'WIOSEC Short Video Competition',
    verificationUrl: 'NONE',
    credentialId: 'Participation Certificate Only',
    category: 'Creative'
  },
  {
    image: require('./certificates/6.png'),
    title: 'C++ Intermediate · SoloLearn',
    verificationUrl: 'https://www.sololearn.com/en/certificates/CC-KSHV4R7Z',
    credentialId: 'CC-KSHV4R7Z',
    category: 'Tech'
  },
  {
    image: require('./certificates/7.png'),
    title: 'MATLAB Onramp · MathWorks',
    verificationUrl:
      'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=a1ede64b-043f-4614-9dfc-0612b3c97a01&',
    credentialId: 'a1ede64b-043f-4614-9dfc-0612b3c97a01',
    category: 'Tech'
  },
  {
    image: require('./certificates/8.png'),
    title: 'Sparklink Participation Certificate',
    verificationUrl: 'NONE',
    credentialId: '-',
    category: 'Creative'
  },
  {
    image: require('./certificates/9.png'),
    title: 'Introduction to Java · SoloLearn',
    verificationUrl: 'https://www.sololearn.com/en/certificates/CC-DRYDJUMJ',
    credentialId: 'CC-DRYDJUMJ',
    category: 'Tech'
  },
  {
    image: require('./certificates/10.png'),
    title: 'MySQL Tutorial · Great Learning',
    verificationUrl: 'https://www.mygreatlearning.com/certificate/KIWUMZCC',
    credentialId: 'KIWUMZCC',
    category: 'Tech'
  },
  {
    image: require('./certificates/3.png'),
    title: 'Engaging Stakeholders for Success · Cisco',
    verificationUrl: 'https://www.credly.com/badges/c3674d69-944f-46ce-8f8d-31572bd89b23/public_url',
    credentialId: 'c3674d69-944f-46ce-8f8d-31572bd89b23',
    category: 'Leadership'
  },
  {
    image: require('./certificates/12.png'),
    title: 'Python for Beginners · University of Moratuwa',
    verificationUrl:
      'https://open.uom.lk/lms/mod/customcert/verify_certificate.php?contextid=4776&code=GP2uvEVwU9&qrcode=1',
    credentialId: 'GP2uvEVwU9',
    category: 'Tech'
  },
  {
    image: require('./certificates/13.png'),
    title: 'PixelCut Participation Certificate',
    verificationUrl: 'https://www.youtube.com/shorts/HoVj8sOaqtE',
    credentialId: '-',
    category: 'Creative'
  },
  {
    image: require('./certificates/14.png'),
    title: 'MoraXtreme 9.0 Participation Certificate',
    verificationUrl: 'None',
    credentialId: '-',
    category: 'Impact'
  }
];

function Skills() {
  const openLightbox = useLightbox();

  return (
    <div className="portfolio-page">
      <section className="section-block glass-panel">
        <div className="section-heading">
          <span>Portfolio</span>
          <h2>Certificates that mirror my curiosity</h2>
        </div>
      </section>

      <section className="section-block">
        <div className="cert-grid">
          {certificates.map((cert) => (
            <article key={cert.title} className="cert-card glass-panel">
              <img
                src={cert.image}
                alt={cert.title}
                className="lightbox-trigger"
                onClick={() => openLightbox({ src: cert.image, alt: cert.title })}
              />
              <div>
                <span>{cert.category}</span>
                <h3>{cert.title}</h3>
                <p>Credential ID: {cert.credentialId}</p>
              </div>
              <a
                href={cert.verificationUrl === 'NONE' || cert.verificationUrl === 'None' ? '#' : cert.verificationUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={cert.verificationUrl === 'NONE' || cert.verificationUrl === 'None' ? 'disabled' : ''}
              >
                Verify
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
