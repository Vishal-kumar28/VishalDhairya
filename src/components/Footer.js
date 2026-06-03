import React from 'react';

function Footer() {
  // const currentYear = new Date().getFullYear(); // Ye automatic chal rahe saal ko catch kar lega

  const styles = {
    footer: {
      padding: '60px max(5vw, 20px) 40px max(5vw, 20px)',
      backgroundColor: 'var(--bg-celebrity)',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '30px'
    },
    socialLinks: {
      display: 'flex',
      gap: '30px',
      fontFamily: 'var(--font-serif)',
      fontSize: '1rem',
      letterSpacing: '1px'
    },
    link: {
      color: 'var(--text-slate)',
      textDecoration: 'none',
      textTransform: 'uppercase',
      transition: 'color 0.3s'
    },
    divider: {
      width: '80px',
      height: '1px',
      backgroundColor: 'var(--accent-champagne)',
      opacity: '0.5'
    },
    copyright: {
      fontFamily: 'var(--font-sans-serif)',
      fontSize: '0.85rem',
      color: 'var(--text-slate)',
      letterSpacing: '0.5px',
      fontWeight: '300'
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Social Media Links (No Icons, Just Pure Elegant Text) */}
      <div style={styles.socialLinks}>
        <a href="https://instagram.com/diosvishal" target="_blank" rel="noreferrer" style={styles.link}
           onMouseEnter={(e) => e.target.style.color = 'var(--text-onyx)'}
           onMouseLeave={(e) => e.target.style.color = 'var(--text-slate)'}>
          Instagram
        </a>
        <a href="https://x.com/VishalKumr28?s=09" target="_blank" rel="noreferrer" style={styles.link}
           onMouseEnter={(e) => e.target.style.color = 'var(--text-onyx)'}
           onMouseLeave={(e) => e.target.style.color = 'var(--text-slate)'}>
          X
        </a>
        <a href="https://www.linkedin.com/in/vishal-kumar-b34239254/" target="_blank" rel="noreferrer" style={styles.link}
           onMouseEnter={(e) => e.target.style.color = 'var(--text-onyx)'}
           onMouseLeave={(e) => e.target.style.color = 'var(--text-slate)'}>
          LinkedIn
        </a>
        <a href="https://www.youtube.com/@InsideTheMatchByVishal" target="_blank" rel="noreferrer" style={styles.link}
           onMouseEnter={(e) => e.target.style.color = 'var(--text-onyx)'}
           onMouseLeave={(e) => e.target.style.color = 'var(--text-slate)'}>
          Youtube
        </a>
      </div>

      {/* A Luxury Subtle Line */}
      <div style={styles.divider}></div>

      {/* Copyright Text */}
      <div style={styles.copyright}>
        Copyright © 2026 Vishal Dhairya. All Rights Reserved.
      </div>
      <div style={styles.copyright}>
        Crafted with Elegance.
      </div>
    </footer>
  );
}

export default Footer;