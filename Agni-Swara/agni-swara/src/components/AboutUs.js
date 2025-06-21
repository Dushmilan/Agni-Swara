import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.aboutHero}>
        <div className={styles.aboutOverlay}>
          <div className={styles.aboutText}>
            <h1 className={styles.aboutTitle}>Agni Swara</h1>
            <p className={styles.aboutSubtitle}>Your Gateway to Cinematic Soundscapes</p>
            <div className={styles.aboutContent}>
              <p>
                Founded in 2015, Agni Swara has been captivating audiences with our unique blend of film music and live performance. Our journey began with a shared passion for cinematic soundtracks and a vision to bring these iconic scores to life on stage.
              </p>
              <div className={styles.storySection}>
                <h2>Our Story</h2>
                <p>
                  We are a group of passionate musicians dedicated to bringing the magic of film music to live audiences. Our journey began when we came together with a shared vision of creating immersive musical experiences that transport listeners to different worlds through the power of cinematic scores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
