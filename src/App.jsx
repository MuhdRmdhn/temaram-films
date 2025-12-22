import { useState } from "react";
import "./App.css";

import akad from "../public/images/akad.jpg";
import akad2 from "../public/images/akad2.jpg";
import cakecutting from "../public/images/cakecuttingconfetti.jpg";
import couplepotrait from "../public/images/couplepotrait.jpg";
import raffles from "../public/images/raffles.jpg";
import selfpotrait from "../public/images/selfpotrait.jpg";

function App() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    data["form-name"] = "contact";

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <div className="brand-logo">Temaram Films</div>
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
          <p className="hero-tagline">Cinematic photography in warm, quiet light.</p>
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
            Temaram is the quiet warmth of light at its most honest.
            It’s in the soft shadows, the in-between moments,
            and the stillness that often goes unnoticed.
            </p>
            <p>
            Temaram Films focuses on cinematic portraits, couples sessions,
            and intimate event coverage, captured with a film-inspired,
            nostalgic approach. Every session is guided by simplicity,
            patience, and a respect for genuine connection.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO PREVIEW */}
      <section id="portfolio" className="section section-portfolio">
        <div className="section-inner">
          <h2>Featured Work</h2>
          <p className="section-subtitle">A few frames in warm, cinematic light.</p>
          <div className="portfolio-grid">
            <img src={akad} alt="Akad ceremony moment" />
            <img src={couplepotrait} alt="Outdoor wedding couple" />
            <img src={akad2} alt="Wedding celebration with confetti" />
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
              <span className="service-note">For stories that feel like dusk.</span>
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
            action="/"
          >
            {/* Netlify needs these */}
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

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

            {/* Status message */}
            {formStatus === "success" && (
              <p style={{ marginTop: "12px" }}>
                ✅ Sent! I’ll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p style={{ marginTop: "12px" }}>
                ❌ Something went wrong. Please try again or WhatsApp me.
              </p>
            )}

            <div className="form-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Enquiry"}
              </button>
              <a
                href="https://wa.me/6596480983"
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
            <a href="https://www.tiktok.com/@temaram.films" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;