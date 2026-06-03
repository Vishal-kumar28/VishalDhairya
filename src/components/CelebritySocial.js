import React from 'react';
// Premium modern icons ko import kiya
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

function CelebritySocial() {
  // Aap apne asli social media links yahan '#' ki jagah daal sakte hain
  const socials = [
    
    { id: 1, icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { id: 2, icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { id: 3, icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { id: 4, icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const styles = {
    section: {
      backgroundColor: 'var(--bg-celebrity)', // Reference image jaisa premium rich matte black banner
      padding: '60px 20px',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box'
    },
    heading: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      fontWeight: '300',
      color: 'var(--text-onyx)', // Soft off-white color text ke liye taki aankhon me chubhe nahi
      marginBottom: '30px',
      letterSpacing: '2px',
        textTransform: 'uppercase',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '35px', // Icons ke beech ka clean distance
      flexWrap: 'wrap'
    },
    iconLink: {
      color: 'rgba(42, 40, 37, 0.7)', // Shuruat me icons thode muted/matte white dikhenge
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
            // Hover effects pure vanilla inline styles ke sath handle kiya
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFF';
              e.currentTarget.style.transform = 'scale(1.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(236, 230, 220, 0.7)';
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