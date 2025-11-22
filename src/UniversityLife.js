import React, { useState } from 'react';
import './UniversityLife.css';
import backgroundVideo from './images/back.mp4';

import { universityGallery } from './galleryData';
import { useLightbox } from './components/Lightbox';

const storyHighlights = [
  {
    title: 'CodeX Champions',
    description: 'A triumphant sprint with Team 221 — blending algorithms, grit, and friendship.',
    image: require('./uni_images/221.jpg')
  },
  {
    title: 'BITCODE 2nd Runners Up',
    description: 'Pushing creative boundaries in back-to-back hackathons with a powerhouse team.',
    image: require('./uni_images/image19.jpg')
  },
  {
    title: 'IEEE SB ExCom 24/25',
    description: 'Designing experiences, orchestrating events, and igniting volunteer energy on campus.',
    image: require('./uni_images/image23.jpg')
  },
  {
    title: 'විභාවි Double Win',
    description: 'First place in both prose and poetry categories — celebrating language and rhythm.',
    image: require('./uni_images/image21.jpg')
  }
];

const culturalMoments = [
  {
    title: 'Melodies of Joy',
    details: 'EFAC carols that felt like a dream sequence, harmonies echoing through the quad.',
    image: require('./uni_images/image18.jpg')
  },
  {
    title: 'පැදුර 2025',
    details: 'Drama crew adventures with costumes, lights, and adrenaline backstage.',
    image: require('./uni_images/image26.jpg')
  },
  {
    title: 'VoltCast 1.0',
    details: 'Podcasting about innovation, vulnerability, and campus magic.',
    image: require('./uni_images/image3.jpg')
  }
];

function UniversityLife() {
  const [focusIndex, setFocusIndex] = useState(0);
  const gallery = universityGallery;
  const openLightbox = useLightbox();

  const next = () => setFocusIndex((focusIndex + 1) % gallery.length);
  const prev = () => setFocusIndex((focusIndex - 1 + gallery.length) % gallery.length);

  return (
    <div className="uni-page">
      <section className="uni-hero glass-panel">
        <div className="uni-hero-media">
          <video autoPlay loop muted playsInline poster={gallery[0]?.src}>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="uni-hero-overlay">
            <button onClick={prev} aria-label="Previous moment">‹</button>
            {gallery[focusIndex] && (
              <img
                src={gallery[focusIndex].src}
                alt={gallery[focusIndex].label}
                className="lightbox-trigger"
                onClick={() => openLightbox({
                  src: gallery[focusIndex].src,
                  alt: gallery[focusIndex].label
                })}
              />
            )}
            <button onClick={next} aria-label="Next moment">›</button>
          </div>
        </div>
        <div>
          <span className="tag-chip">University portfolio</span>
          <h1>Leadership, art, and engineering colliding daily.</h1>
          <p className="text-muted">
            From IEEE halls to poetry slams, my Ruhuna experience is a kaleidoscope of code, theatre, and service. Here’s a curated look at the
            culture and community that keeps me grounded.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Highlights</span>
          <h2>Competitive sparks & collaborative wins</h2>
        </div>
        <div className="uni-highlight-grid">
          {storyHighlights.map((story) => (
            <article key={story.title} className="uni-story-card glass-panel">
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

      <section className="section-block glass-panel">
        <div className="section-heading">
          <span>Culture & expression</span>
          <h2>Where art meets algorithms</h2>
        </div>
        <div className="uni-culture-grid">
          {culturalMoments.map((moment) => (
            <article key={moment.title}>
              <img
                src={moment.image}
                alt={moment.title}
                className="lightbox-trigger"
                onClick={() => openLightbox({ src: moment.image, alt: moment.title })}
              />
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.details}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Full gallery</span>
          <h2>Every frame from Ruhuna life</h2>
        </div>
        <div className="uni-gallery-grid">
          {gallery.map((item) => (
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

export default UniversityLife;
