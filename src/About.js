import React from 'react';
import './About.css';
import backgroundVideo from './images/back.mp4';
import badgeAnne from './images/annes.png';
import badgeMaliya from './images/Maliyadeva.png';
import badgeRuhuna from './images/ruhuna.gif';
import badgeEfac from './images/efac.png';
import badgeKawa from './images/Kawa.jpg';

const milestones = [
  {
    title: 'University of Ruhuna',
    subtitle: 'Faculty of Engineering · Department of Electrical & Information Engineering',
    badge: [badgeRuhuna, badgeEfac],
    description:
      'Top-50 OGPA, Computer Engineering discipline by choice, and a calendar full of IEEE volunteering, theatre, and poetry.',
    details:
      'Computer Engineering lets me blend algorithms with empathy. Between labs I co-produce events, act in dramas, and write lyrical pieces that document campus life while winning volunteer awards and national-level hackathons.'
  },
  {
    title: 'Maliyadeva College',
    subtitle: 'Advanced Level years',
    badge: [badgeMaliya],
    description:
      'Following high achievements in my G.C.E. O/Ls, I was selected for Maliyadeva College, one of the most prominent schools in Sri Lanka. I completed my A/Ls there with top results, earning admission to the Faculty of Engineering at the University of Ruhuna, one of Sri Lanka’s top three engineering faculties. At Maliyadeva, I took on leadership roles as Vice President of the Research Unit and Language Coordinator of the Media Unit, while actively participating in the science, IT, and Buddhist societies.',
    details: ''
  },
  {
    title: "St. Anne's College",
    subtitle: 'Kurunegala · 150+ years of legacy',
    badge: [badgeAnne],
    description:
      "After excelling in the Grade 5 Scholarship, I joined St. Anne’s College, Kurunegala—a historic school over 150 years old. I completed my G.C.E. O/Ls there with 8 As and 1 B and took on various leadership roles, including leading the debate team, captaining our pentathlon team for the national TV show 'Sirasa Pentathlon,' and becoming a state champion in public speaking. As Chief Editor of the school media unit, I also performed in stage dramas, played in the orchestra, and participated in quizzes, experiences that shaped my personality and eliminated any stage fear.",
    details: ''
  },
  {
    title: 'Kawanthissa M.V. – Ampara',
    subtitle: 'Early schooling',
    badge: [badgeKawa],
    description:
      "I started my educational journey at Kawanthissa M.V in Ampara district, where I laid the foundation for my academic growth. Then I had to go to St.Bernadette's Model School in Polagahawela and Bandaranayake Model Primary School respectively as my family moved from Ampara to Polgahawela.",
    details: ''
  }
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <video autoPlay loop muted playsInline poster={badgeRuhuna}>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-hero-overlay glass-panel">
          <span className="tag-chip">Hello, I’m Thanujaya</span>
          <h1>Engineer, volunteer, storyteller.</h1>
          <p>
            I am a dedicated Computer Engineering undergraduate at the University of Ruhuna - Faculty of Engineering under the Department of Electrical & Information Engineering, where I am honing my skills and knowledge in various disciplines. Recognized by my peers as a natural leader, I possess the ability to swiftly adapt to challenges and lead by example. Equally adept at being a team player, I deeply value collaboration and believe in respecting and supporting leadership decisions while contributing innovative ideas for improvement. As a versatile individual, I thrive on balancing multiple priorities and continuously seek out new opportunities for growth and learning. I am an award-winning volunteer, a national-competition-winning competitive programmer, and a balanced undergraduate who manages both academics and extracurricular activities with intention.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <span>Milestones</span>
          <h2>Chapters that shaped how I learn and lead</h2>
        </div>
        <div className="about-timeline">
          {milestones.map((item) => (
            <article key={item.title} className="glass-panel">
              <div className="milestone-badges">
                {item.badge.map((imgSrc) => (
                  <img key={imgSrc} src={imgSrc} alt={item.title} />
                ))}
              </div>
              <div>
                <h3>{item.title}</h3>
                <small>{item.subtitle}</small>
                <p>{item.description}</p>
                {item.details && <p className="text-muted">{item.details}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
