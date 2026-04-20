import { useEffect, useState } from 'react';
import './App.css';
import poster1 from './assets/poster1-optimized.jpg';
import branding from './assets/branding-optimized.webp';
import carousel from './assets/carousel-optimized.webp';
import profilePic from './assets/profile-pic-optimized.webp';
import resumePdf from './assets/pavani patnayakuni resume.pdf';
import behanceIcon from './assets/behance_logo.png';
import gmailIcon from './assets/gmail_new_logo_icon_159149.webp';
import linkedinIcon from './assets/Linkedin_logo.png';

const projects = [
  {
    title: 'Corporate Recruitment Event Flyer',
    category: 'Flyer Design',
    image: poster1,
    description:
      'A professional event flyer designed to promote a mega job fair with clear hierarchy and strong corporate appeal.',
    link: 'https://www.behance.net/gallery/247155967/Corporate-Recruitment-Event-Flyer-Mega-Job-Fair',
  },
  {
    title: 'AI Perfume Advertisement Concept',
    category: 'Advertisement Design',
    image: branding,
    description:
      'A concept ad project that combines luxury product styling with AI-generated visuals for a striking campaign look.',
    link: 'https://www.behance.net/gallery/247030443/AI-Generated-Perfume-Advertisement-Concept-Project',
  },
  {
    title: 'Productivity Tips Carousel',
    category: 'Instagram Creative',
    image: carousel,
    description:
      'A social media carousel built to present useful content in a clean, swipe-friendly, and engaging format.',
    link: 'https://www.behance.net/gallery/246947267/ProductivityTips-Carousel-Design-Social-Media-Layout',
  },
];

const services = [
  'Brand identity and visual direction',
  'Social media creatives and campaign assets',
  'Poster, flyer, and promotional design',
  'Presentation and digital marketing visuals',
];

const highlights = [
  { value: '3+', label: 'Design formats explored' },
  { value: '100%', label: 'Focus on clean visual storytelling' },
  { value: '24/7', label: 'Curiosity for better creative ideas' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#home">
          Pavani
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#work" onClick={handleNavClick}>
            Work
          </a>
          <a href="#services" onClick={handleNavClick}>
            Services
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hello I'm</p>
            <h1>
              Pavani
              <span> Patnayakuni</span>
            </h1>
            <p className="hero-subtitle">Graphic designer crafting polished visuals for modern brands.</p>
            <p className="hero-text">
              I create posters, branding concepts, and social media creatives
              that help ideas feel polished and easy to connect with. My work
              blends clean composition with expressive color and modern digital
              storytelling.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore My Work
              </a>
              <a
                className="button button-download"
                href={resumePdf}
                download
              >
                Download Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-card">
              <div className="portrait-frame">
                <img src={profilePic} alt="Portrait of Pavani" />
              </div>
              <div className="portrait-note">
                <p>Currently building thoughtful visuals for digital-first brands.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Creative work with structure, mood, and purpose.</h2>
          </div>

          <div className="about-layout">
            <p className="about-text">
              I am passionate about transforming ideas into designs that are
              both visually engaging and easy to understand. I enjoy building
              graphics that feel modern, balanced, and useful, whether the
              format is a campaign poster, a brand visual, or a social media
              carousel. My goal is simple: make communication look beautiful
              without losing clarity.
            </p>

            <div className="about-panel">
              <h3>What I enjoy working on</h3>
              <ul>
                <li>Clean layouts with strong visual hierarchy</li>
                <li>Brand-forward color palettes and typography</li>
                <li>Social media content that feels polished and current</li>
                <li>Design systems that can scale across formats</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected Work</p>
            <h2>Three pieces that show my approach to visual storytelling.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="project-copy">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View on Behance
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Design support for brands, campaigns, and content teams.</h2>
          </div>

          <div className="services-layout">
            <div className="services-panel">
              <p>
                I enjoy helping businesses and creators present their ideas in a
                way that feels intentional, professional, and visually strong.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-card" key={service}>
                  <span />
                  <p>{service}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-intro">
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s create something that looks as good as the idea feels.</h2>
              <p className="contact-text">
                I&apos;m open to freelance projects, internships, and full-time design
                opportunities.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:pavanipatnayakuni@gmail.com">
                <img src={gmailIcon} alt="Gmail icon" />
                <span>pavanipatnayakuni@gmail.com</span>
              </a>
              <a href="https://www.behance.net/pavanipatnayak" target="_blank" rel="noreferrer">
                <img src={behanceIcon} alt="Behance icon" />
                <span>behance.net/pavanipatnayak</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pavani-patnayakuni-649262232/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn icon" />
                <span>linkedin.com/in/pavani-patnayakuni-649262232</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
