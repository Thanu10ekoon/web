import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

import profileImage from './images/propic.jpg';
import badgeKawa from './images/Kawa.jpg';
import badgeMaliya from './images/Maliyadeva.png';
import badgeRuhuna from './images/ruhuna.gif';

import { universityGallery, schoolGallery, volunteerGallery } from './galleryData';
import { useLightbox } from './components/Lightbox';

const stats = [
  { value: '3+', label: 'Leadership roles' },
  { value: '15', label: 'Recognized certificates' },
  { value: '120+', label: 'Volunteer hours' },
  { value: 'Top 50', label: 'Engineering batch rank' }
];

const highlightCards = [
  {
    title: 'Rooted in Community',
    copy:
      'From Kawanthissa M.V. in Ampara to St. Anne’s College, my first stages were filled with debate podiums, orchestras, and fearless storytelling.',
    image: badgeKawa
  },
  {
    title: 'Maliyadeva Chapters',
    copy:
      'Vice President of the Research Unit, Media Unit language coordinator, and a constant voice at science, IT, and Buddhist societies.',
    image: badgeMaliya
  },
  {
    title: 'University Pulse',
    copy:
      'Computer Engineering undergrad at Ruhuna — balancing IEEE volunteering, theatre, poetry, and a drive for impactful tech.',
    image: badgeRuhuna
  }
];

const galleryPreviews = [
  { title: 'University Life', color: '#6c5ce7', link: '/universitylife', items: universityGallery.slice(0, 4) },
  { title: 'School Spirit', color: '#ff6f61', link: '/scllife', items: schoolGallery.slice(0, 4) },
  { title: 'Volunteering', color: '#30e3ca', link: '/volun', items: volunteerGallery.slice(0, 4) }
];

const heroBadges = [
  { src: badgeRuhuna, label: 'University of Ruhuna' },
  { src: badgeMaliya, label: 'Maliyadeva College' },
  { src: badgeKawa, label: 'Kawanthissa M.V.' }
];

const heroPillars = [
  {
    title: 'Human-centered tech',
    copy: 'Prototype products and research work that keep user empathy measurable, not abstract.',
    icon: '🧠'
  },
  {
    title: 'Service-led leadership',
    copy: 'IEEE teams, media crews, and theatre productions where my role is to unlock voices.',
    icon: '🤝'
  },
  {
    title: 'Stories that travel',
    copy: 'Poetry, public speaking, and visual storytelling to ensure every build has a narrative.',
    icon: '📣'
  }
];

function Home() {
  const openLightbox = useLightbox();
  return (
    <div className="home-page">
      <section className="hero glass-panel">
        <div className="hero-text">
          <span className="tag-chip">Computer Engineering Undergraduate</span>
          <h1>
            Leading with empathy,
            <span className="gradient-text"> building with impact.</span>
          </h1>
          <p>
            I am a Computer Engineering undergraduate at the University of Ruhuna, Faculty of Engineering — thriving at the
            intersection of technology, volunteering, and storytelling. Each project, event, and poem is another opportunity to
            uplift communities and challenge myself.
          </p>
          <div className="cta-row">
            <Link to="/skills" className="cta-button primary">
              Browse portfolio
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Collaborate <FaArrowRight />
            </Link>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-media">
          <article className="hero-profile-card glass-panel">
            <div className="avatar-ring">
              <img src={profileImage} alt="Thanujaya Tennekoon" />
            </div>
            <p>“Adaptable leader, curious engineer, lifelong storyteller.”</p>
            <ul className="hero-badges">
              {heroBadges.map((badge) => (
                <li key={badge.label}>
                  <img src={badge.src} alt={badge.label} />
                </li>
              ))}
            </ul>
          </article>
          <div className="hero-pillars">
            {heroPillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>
                  <span aria-hidden="true">{pillar.icon}</span>
                  {pillar.title}
                </h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Life highlights</span>
          <h2>Milestones that shaped my voice</h2>
        </div>
        <div className="highlight-grid">
          {highlightCards.map((card) => (
            <article key={card.title} className="highlight-card glass-panel">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Latest moments</span>
          <h2>A living timeline of campus, school, and service</h2>
        </div>
        <div className="gallery-preview-grid">
          {galleryPreviews.map((group) => (
            <div key={group.title} className="gallery-preview glass-panel">
              <header>
                <p style={{ color: group.color }}>{group.title}</p>
                <Link to={group.link}>View full story →</Link>
              </header>
              <div className="gallery-preview-images">
                {group.items.map((item) => (
                  <img
                    key={item.src}
                    src={item.src}
                    alt={item.label}
                    className="lightbox-trigger"
                    onClick={() => openLightbox({ src: item.src, alt: item.label })}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block glass-panel home-quote">
        <div className="split-panel">
          <div>
            <span className="tag-chip">Why I create</span>
            <h2>
              “Technology is my toolkit. Service is my compass. Storytelling is how I invite others to build with me.”
            </h2>
            <p className="text-muted">
              Acting on stage, composing poetry, or prototyping products — every craft is a rehearsal for leadership grounded in
              empathy and courage.
            </p>
          </div>
          <div className="quote-note">
            <p>Raised on tradition, driven by innovation — still hungry for what is next.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
