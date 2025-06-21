import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BandMembers from './components/BandMembers';
import Events from './components/Events';
import AboutUs from './components/AboutUs';
import Contact from './components/ContactUs';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero id="home" />
      <section id="band" className="band-members-section">
        <BandMembers />
      </section>
      <section id="events" className="events-section">
        <Events />
      </section>
      <section id="about" className="about-section">
        <AboutUs />
      </section>
      <section id="contact" className="contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default App;
