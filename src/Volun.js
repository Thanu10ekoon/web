import React from 'react';
import './volun.css';
import { volunteerGallery } from './galleryData';
import { useLightbox } from './components/Lightbox';

const volunteerStats = [
  { label: 'Hours of service', value: '120+', detail: 'IEEE, community, and campus productions' },
  { label: 'Events hosted', value: '20+', detail: 'From podcasts to coding marathons' },
  { label: 'Awards & shoutouts', value: '5', detail: 'Volunteer of the Month & national recognition' }
];

const volunteerStories = [
  {
    title: "IEEE Volunteer of the Month",
    description: 'Recognized in July 2024 for driving member engagement with heart.',
    image: require('./Volu_images/1.jpg')
  },
  {
    title: 'VoltCast 1.0',
    description: 'Produced conversations that made cutting-edge tech approachable to freshmen.',
    image: require('./Volu_images/9.jpg')
  },
  {
    title: 'INSPIRE Crew 24/25',
    description: 'Mentored budding leaders, ensuring every idea had a stage.',
    image: require('./Volu_images/7.jpg')
  },
  {
    title: 'IEEE SL Awards',
    description: 'Best Affinity Group Project — proof that empathy scales.',
    image: require('./Volu_images/11.jpg')
  }
];

function Volu() {
  const openLightbox = useLightbox();
  return (
    <div className="volunteer-page">
      <section className="glass-panel">
        <div className="section-heading">
          <span>Volunteering</span>
          <h2>Service is the heartbeat of my engineering journey.</h2>
        </div>
        <div className="volunteer-stat-grid">
          {volunteerStats.map((stat) => (
            <article key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <small>{stat.detail}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Stories of impact</span>
          <h2>Moments that prove community building is creative work.</h2>
        </div>
        <div className="volunteer-story-grid">
          {volunteerStories.map((story) => (
            <article key={story.title} className="glass-panel">
              <img
                src={story.image}
                alt={story.title}
                className="lightbox-trigger"
                onClick={() => openLightbox({ src: story.image, alt: story.title })}
              />
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Gallery</span>
          <h2>Every volunteering frame</h2>
        </div>
        <div className="volunteer-gallery">
          {volunteerGallery.map((item) => (
            <figure key={item.src}>
              <img
                src={item.src}
                alt={item.label}
                className="lightbox-trigger"
                onClick={() => openLightbox({ src: item.src, alt: item.label })}
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Volu;