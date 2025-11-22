import React from 'react';
import './SclLife.css';
import badgeAnne from './images/annes.png';
import badgeMaliya from './images/Maliyadeva.png';
import badgeKawa from './images/Kawa.jpg';

import { schoolGallery } from './galleryData';
import { useLightbox } from './components/Lightbox';

const schoolTimeline = [
  {
    year: 'Early years',
    school: 'Kawanthissa M.V. · Ampara',
    description:
      "I started my educational journey at Kawanthissa M.V in Ampara district, where I laid the foundation for my academic growth. Then I had to go to St.Bernadette's Model School in Polagahawela and Bandaranayake Model Primary School respectively as my family moved from Ampara to Polgahawela.",
    badge: badgeKawa
  },
  {
    year: 'Primary',
    school: 'St. Anne’s College · Kurunegala',
    description:
      "After excelling in the Grade 5 Scholarship, I joined St. Anne’s College, Kurunegala—a historic school over 150 years old. I completed my G.C.E. O/Ls there with 8 As and 1 B and took on various leadership roles, including leading the debate team, captaining our pentathlon team for the national TV show 'Sirasa Pentathlon,' and becoming a state champion in public speaking. As Chief Editor of the school media unit, I also performed in stage dramas, played in the orchestra, and participated in quizzes, experiences that shaped my personality and eliminated any stage fear.",
    badge: badgeAnne
  },
  {
    year: 'Advanced Level',
    school: 'Maliyadeva College',
    description:
      'Following high achievements in my G.C.E. O/Ls, I was selected for Maliyadeva College, one of the most prominent schools in Sri Lanka. I completed my A/Ls there with top results, earning admission to the Faculty of Engineering at the University of Ruhuna, one of Sri Lanka’s top three engineering faculties. At Maliyadeva, I took on leadership roles as Vice President of the Research Unit and Language Coordinator of the Media Unit, while actively participating in the science, IT, and Buddhist societies.',
    badge: badgeMaliya
  }
];

function SclLife() {
  const openLightbox = useLightbox();
  return (
    <div className="school-page">
      <section className="glass-panel">
        <div className="section-heading">
          <span>School journey</span>
          <h2>The stages where confidence and community were built.</h2>
        </div>
        <div className="school-timeline">
          {schoolTimeline.map((entry) => (
            <article key={entry.school}>
              <div className="timeline-dot" />
              <div className="timeline-body">
                <img src={entry.badge} alt={entry.school} />
                <h3>{entry.school}</h3>
                <p>{entry.description}</p>
                <small>{entry.year}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Gallery</span>
          <h2>Every snapshot from school life</h2>
        </div>
        <div className="school-gallery">
          {schoolGallery.map((item) => (
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

export default SclLife;
