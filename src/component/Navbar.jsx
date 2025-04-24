import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../assest/nav.module.css'; // Corrected path for your CSS module

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={`${styles.navbarContainer} p-4 rounded-5`}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <h1 className={styles.logoText}>AG</h1> {/* Logo is now AG */}
      </div>

      {/* Hamburger Button for Small Screens */}
      <button className={styles.hamburger} onClick={handleMenuToggle}>
        <span className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.xIcon : ''}`}></span>
        
      </button>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        {/* Always visible links */}
        <NavLink
          to="/"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.navLinkHover}`}
          onClick={handleLinkClick}
        >
          Home
        </NavLink>
        {/* Other links that show when the menu is open */}
        <NavLink
          to="/about"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.navLinkHover}`}
          onClick={handleLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="/Projects"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.navLinkHover}`}
          onClick={handleLinkClick}
        >
          Projects
        </NavLink>
        <NavLink
          to="/Contactus"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''} ${styles.navLinkHover}`}
          onClick={handleLinkClick}
        >
          Contact us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
