// Footer.js
import React from 'react';
import styles from '../assest/Footer.module.css';  // Import the CSS module

const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-5` }>
      <div>
        <p>© 2025 Your Company | All Rights Reserved</p>

        {/* <button className={styles.footerButton}>Learn More</button> */}

        <div className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
