import { useState } from "react";
import "./App.css";

import AZ1 from "../src/images/AZ/AZ1.jpg";
import AZ2 from "../src/images/AZ/AZ2.jpg";
import AZ3 from "../src/images/AZ/AZ3.jpg";
import AZ4 from "../src/images/AZ/AZ4.jpg";
import AZ5 from "../src/images/AZ/AZ5.jpg";
import AZ6 from "../src/images/AZ/AZ6.jpg";
import AZ7 from "../src/images/AZ/AZ7.jpg";
import AZ8 from "../src/images/AZ/AZ8.jpg";
import IS1 from "../src/images/IS/IS1.JPG";
import IS2 from "../src/images/IS/IS2.JPG";
import IS3 from "../src/images/IS/IS3.JPG";
import IS4 from "../src/images/IS/IS4.JPG";
import IS5 from "../src/images/IS/IS5.JPG";
import IS6 from "../src/images/IS/IS6.JPG";
import IS7 from "../src/images/IS/IS7.JPG";
import IS8 from "../src/images/IS/IS8.JPG";
import AD1 from "../src/images/AD/AD1.JPG";
import AD2 from "../src/images/AD/AD2.JPG";
import AD3 from "../src/images/AD/AD3.JPG";
import AD4 from "../src/images/AD/AD4.JPG";
import AD5 from "../src/images/AD/AD5.JPG";
import AD6 from "../src/images/AD/AD6.JPG";
import AD7 from "../src/images/AD/AD7.JPG";
import AD8 from "../src/images/AD/AD8.JPG";
import R1 from "../src/images/RUZ/R1.JPG";
import R2 from "../src/images/RUZ/R2.JPG";
import R3 from "../src/images/RUZ/R3.JPG";
import R4 from "../src/images/RUZ/R4.JPG";
import R5 from "../src/images/RUZ/R5.JPG";
import R6 from "../src/images/RUZ/R6.JPG";
import R7 from "../src/images/RUZ/R7.JPG";
import R8 from "../src/images/RUZ/R8.JPG";
import AA1 from "../src/images/AA/AA1.JPG";
import AA2 from "../src/images/AA/AA2.JPG";
import AA3 from "../src/images/AA/AA3.JPG";
import AA4 from "../src/images/AA/AA4.JPG";
import AA5 from "../src/images/AA/AA5.JPG";
import AA6 from "../src/images/AA/AA6.JPG";
import AA7 from "../src/images/AA/AA7.JPG";
import AA8 from "../src/images/AA/AA8.JPG";
import raffles from "../src/images/raffles.jpg";
import selfpotrait from "../src/images/selfpotrait.jpg";
import stairs from "../src/images/mywork/1.jpg";
import bar from "../src/images/mywork/2.jpg";
import bnw from "../src/images/mywork/3.jpg";
import sunrise from "../src/images/mywork/4.jpg";
import reflection from "../src/images/mywork/5.jpg";
import beach from "../src/images/mywork/6.jpg";
import dj from "../src/images/mywork/7.jpg";
import ceramic from "../src/images/mywork/8.jpg";


function App() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | success | error
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const portfolioProjects = [
    {
      title: "Asyura & Zuffean",
      photos: [AZ1, AZ2, AZ3, AZ4, AZ5, AZ6, AZ7, AZ8],
    },
    {
      title: "Irwan & Syazreema",
      photos: [IS1, IS2, IS3, IS4, IS5, IS6, IS7, IS8],
    },
    {
      title: "Diana & Akif",
      photos: [AD1, AD2, AD3, AD4, AD5, AD6, AD7, AD8],
    },
    {
      title: "Ruzaimi's Birthday",
      photos: [R1, R2, R3, R4, R5, R6, R7, R8],
    },
    {
      title: "Aisyah & Adil",
      photos: [AA1, AA2, AA3, AA4, AA5, AA6, AA7, AA8],
    },
  ];

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
        <div className="nav-logo">Temaram Films</div>
        <nav className="nav-links">
          <a href="#hero" onClick={() => setSelectedPortfolio(null)}>Home</a>
          <a href="#about">About</a>
          <a href="#portfolio-projects" onClick={() => setSelectedPortfolio(null)}>Portfolio</a>
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
              Hi, I’m Ramadhan — the person behind Temaram Films.  
              I started photography in 2020, beginning with film using a Canon AE-1. 
              That process shaped the way I see light, moments, and patience in every frame.
            </p>

            <p>
              After a couple of years, I transitioned into digital with the Fujifilm X-T10 and X-M5.  
              Most of the work you see here is captured through these cameras — still carrying 
              the same film-inspired approach, just in a different form.
            </p>

            <p>
              Temaram is the soft, dim warmth of light at its most honest moment.  
              Temaram Films is my way of capturing stories in that gentle glow —  
              warm, quiet, and deeply human.
            </p>

            <p>
              I focus on cinematic portraits, couples, and intimate events —  
              creating images that feel natural, nostalgic, and true to the moment.
            </p>
          </div>
        </div>
      </section>

      {/* THROUGH MY LENS */}
      <section id="through-my-lens" className="section section-portfolio">
        <div className="section-inner">
          <h2>Through My Lens</h2>
          <p className="section-subtitle">
            A quiet collection of moments — the light I’m drawn to, the spaces in between, 
            and the way I see the world when everything slows down.
          </p>
          <div className="portfolio-grid">
            <img src={stairs} alt="Temaram personal work 1" />
            <img src={bar} alt="Temaram personal work 2" />
            <img src={bnw} alt="Temaram personal work 3" />
            <img src={sunrise} alt="Temaram personal work 4" />
            <img src={reflection} alt="Temaram personal work 5" />
            <img src={beach} alt="Temaram personal work 6" />
            <img src={dj} alt="Temaram personal work 7" />
            <img src={ceramic} alt="Temaram personal work 8" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO PROJECTS */}
      <section id="portfolio-projects" className="section section-portfolio">
        <div className="section-inner">
          {!selectedPortfolio ? (
            <>
              <h2>Portfolio Projects</h2>
              <p className="section-subtitle">
                A selection of stories and moments I’ve had the chance to capture.
              </p>
              <div className="services-grid">
                {portfolioProjects.map((project) => (
                  <div
                    key={project.title}
                    className="service-card"
                    onClick={() => setSelectedPortfolio(project)}
                    style={{ cursor: "pointer" }}
                  >
                    <h3>{project.title}</h3>
                    <p>View gallery</p>
                    <span className="service-note">
                      A collection of moments from this session.
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2>{selectedPortfolio.title}</h2>
              <p className="section-subtitle">
                A closer look into this story.
              </p>

              <div className="hero-buttons" style={{ marginBottom: "32px" }}>
                <a
                  href="#portfolio-projects"
                  className="btn btn-secondary"
                  onClick={() => setSelectedPortfolio(null)}
                >
                  Back to Portfolio
                </a>
              </div>

              <div className="portfolio-grid">
                {selectedPortfolio.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${selectedPortfolio.title} ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
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