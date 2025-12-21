import "./App.css";
import akad from "../src/images/akad.JPG"
import akad2 from "../src/images/akad2.JPG"
import catcutting from "../src/images/cakecuttingconfetti.JPG"
import couplepotrait from "../src/images/couplepotrait.JPG"
import raffles from "../src/images/raffles.JPG"
import selfpotrait from "../src/images/selfpotrait.JPG"

function App() {
  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-logo">Temaram Films</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="hero"
        style={{ backgroundImage: `url(${raffles})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tagline">
            Cinematic photography in warm, quiet light.
          </p>
          <h1 className="hero-title">Temaram Films</h1>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-secondary">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="section section-about">
        <div className="section-inner about-inner">
          <div className="about-photo">
            <img src={selfpotrait} alt="Quiet portrait" />
          </div>
          <div className="about-text">
            <h2>About Temaram</h2>
            <p>
              Temaram is the soft, dim warmth of light at its most honest
              moment. Temaram Films is my way of capturing stories in that gentle
              glow — warm, quiet, and deeply human.
            </p>
            <p>
              I create cinematic portraits, couples sessions and intimate event
              coverage with a nostalgic, film-inspired feel.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO PREVIEW */}
      <section id="portfolio" className="section section-portfolio">
        <div className="section-inner">
          <h2>Featured Work</h2>
          <p className="section-subtitle">
            A few frames in warm, cinematic light.
          </p>
          <div className="portfolio-grid">
            <img src={couplepotrait} alt="Outdoor wedding couple" />
            <img src={akad} alt="Akad ceremony moment" />
            <img src={catcutting} alt="Wedding celebration with confetti" />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services" className="section section-services">
        <div className="section-inner">
          <h2>Sessions</h2>
          <p className="section-subtitle">
            Simple, warm, cinematic sessions tailored to you.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <h3>Portraits</h3>
              <p>1 hour • 20 edited photos • warm, cinematic tones.</p>
              <span className="service-note">
                Perfect for solo portraits & profiles.
              </span>
            </div>
            <div className="service-card">
              <h3>Couples</h3>
              <p>1.5 hours • 30 edited photos • multiple locations.</p>
              <span className="service-note">
                For stories that feel like dusk.
              </span>
            </div>
            <div className="service-card">
              <h3>Events</h3>
              <p>2+ hours coverage • unlimited photos • fast delivery.</p>
              <span className="service-note">
                Intimate gatherings, launches & more.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="section section-contact">
        <div className="section-inner contact-inner">
          <h2>Let&apos;s create something warm and cinematic.</h2>
          <p>
            Share a little about your shoot, and I&apos;ll get back to you with
            details and availability.
          </p>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
          <input type="hidden" name="form-name" value="contact" />
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="sessionType">Type of session</label>
                <select id="sessionType" name="sessionType" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Portraits</option>
                  <option>Couples</option>
                  <option>Events</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your idea, date, vibe…"
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send Enquiry
              </button>
              <a
                href="https://wa.me/6596480983" // change to your real WhatsApp link
                className="btn btn-secondary"
              >
                WhatsApp Me
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Temaram Films</span>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="mailto:youremail@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;