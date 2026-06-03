import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

function CelebritySocial() {
  const socials = [
    { id: 2, icon: <FaInstagram />, url: 'https://instagram.com/diosvishal', label: 'Instagram' },
    { id: 4, icon: <FaTwitter />, url: 'https://x.com/VishalKumr28?s=09', label: 'Twitter' },
    { id: 5, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vishal-kumar-b34239254/', label: 'LinkedIn' },
    { id: 6, icon: <FaYoutube />, url: 'https://www.youtube.com/@InsideTheMatchByVishal', label: 'YouTube' },
  ];

  const styles = {
    section: {
      backgroundColor: 'transparent', // 🌟 Koi dark banner nahi, background same gallery jaisa normal rahega
      padding: '60px max(5vw, 20px)',
      textAlign: 'center',
      width: '100%',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      boxSizing: 'border-box'
    },
    heading: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      fontWeight: '400',
      color: 'var(--text-onyx)', // 🌟 Text color deep dark charcoal (same as Gallery heading)
      marginBottom: '30px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px', 
      flexWrap: 'wrap'
    },
    iconLink: {
      color: 'var(--text-slate)', // 🌟 Icons ka color muted slate grey (same as Gallery filters)
      fontSize: '1.8rem',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    }
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Social</h2>
      
      <div style={styles.iconContainer}>
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            style={styles.iconLink}
            // Hover karne par color dark black hoga aur soft scale hoga
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-onyx)';
              e.currentTarget.style.transform = 'scale(1.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-slate)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default CelebritySocial;