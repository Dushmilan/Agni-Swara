import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
     
      // Only show navbar at the top of the page
      if (currentScrollY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
     
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a nav link (for mobile)
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside (for better UX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.fullWidthContainer}>
        <div className={styles.navbarContent}>
          <a 
            className={styles.navbarBrand} 
            href="#home" 
            aria-label="Agni Swara Home"
            onClick={handleNavLinkClick}
          >
            <img 
              src="/Logo.jpg" 
              alt="Agni Swara Logo" 
              width="80" 
              height="80" 
              className={styles.navbarBrandImg} 
            />
          </a>

          {/* Hamburger Menu Button - CSS controls visibility */}
          <button
            className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={handleMenuToggle}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}
            role="navigation"
          >
            <li className={styles.navItem}>
              <a 
                className={styles.navLink} 
                href="#home"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                className={styles.navLink} 
                href="#band"
                onClick={handleNavLinkClick}
              >
                Band
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                className={styles.navLink} 
                href="#events"
                onClick={handleNavLinkClick}
              >
                Events
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                className={styles.navLink} 
                href="#about"
                onClick={handleNavLinkClick}
              >
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a 
                className={styles.navLink} 
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;