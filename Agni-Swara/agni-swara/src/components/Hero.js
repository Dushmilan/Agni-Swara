import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroGradient} />
      <div className={styles.heroContent}>
        <p className={styles.heroSubtitle}>Your Gateway to Cinematic Soundscapes</p>
      </div>
    </section>
  );
};

export default Hero;
