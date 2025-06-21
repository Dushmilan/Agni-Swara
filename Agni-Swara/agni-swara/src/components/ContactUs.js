import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './ContactUs.module.css';

const socialLinks = [
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/agiswaraband/"
  },
  {
    name: "Facebook",
    icon: faFacebook,
    href: "https://www.facebook.com/agiswaraband/"
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    href: "https://wa.me/919876543210"
  }
];

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <div className={styles.contactInfo}>
            <i className="fa-solid fa-envelope" style={{ fontSize: '2.5rem' }} />
            <a href="mailto:yourband@email.com" className={styles.contactLink}>
              yourband@email.com
            </a>
          </div>
          <div className={styles.contactInfo}>
            <i className="fa-solid fa-phone" style={{ fontSize: '2.5rem' }} />
            <a href="tel:+911234567890" className={styles.contactLink}>
              +91 1234567890
            </a>
          </div>
          <div className={styles.contactInfo}>
            <i className="fa-solid fa-phone" style={{ fontSize: '2.5rem' }} />
            <a href="tel:+911234567891" className={styles.contactLink}>
              +91 1234567891
            </a>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
