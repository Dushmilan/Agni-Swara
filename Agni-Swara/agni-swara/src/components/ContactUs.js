import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactUs.module.css';

const ContactUs = () => {
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
      icon: faPhone,
      href: "https://wa.me/919876543210"
    }
  ];

  const phoneNumbers = [
    {
      name: "Booking",
      number: "+91 9876543210",
      icon: faPhone
    },
    {
      name: "Management",
      number: "+91 9876543211",
      icon: faPhone
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.contactHeader}>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.contactContainer}>
          <div className={styles.contactRow}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <i className="fa-solid fa-envelope" />
                <a href="mailto:contact@agiswaraband.com" className={styles.contactLink}>
                  contact@agiswaraband.com
                </a>
              </div>
              <div className={styles.phoneContainer}>
                {phoneNumbers.map((phone, index) => (
                  <div key={index} className={styles.phoneItem}>
                    <FontAwesomeIcon icon={phone.icon} className={styles.phoneIcon} />
                    <div className={styles.phoneDetails}>
                      <span className={styles.phoneName}>{phone.name}</span>
                      <a href={`tel:${phone.number}`} className={styles.contactLink}>
                        {phone.number}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactUs;
