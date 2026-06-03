import React from 'react';

function About() {
  const styles = {
    section: {
      padding: '100px max(5vw, 20px)',
      backgroundColor: 'var(--bg-celebrity)',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr', // Left column thoda chota, right thoda bada
      gap: '60px',
      alignItems: 'center',
      borderTop: '1px solid rgba(0,0,0,0.05)'
    },
    imageWrapper: {
      width: '100%',
      height: '550px',
      overflow: 'hidden',
      border: '1px solid var(--accent-champagne)',
      padding: '10px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'grayscale(40%)' // Luxury minimal look
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    heading: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      fontWeight: '400',
      textTransform: 'uppercase',
      margin: '0 0 30px 0',
      letterSpacing: '2px'
    },
    quote: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: '1.4rem',
      lineHeight: '1.6',
      color: 'var(--accent-champagne)',
      marginBottom: '30px',
      borderLeft: '2px solid var(--accent-champagne)',
      paddingLeft: '20px'
    },
    story: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.20rem',
      lineHeight: '1.9',
      color: 'var(--text-slate)',
      fontWeight: '300',
      textAlign: 'justify'
    }
  };

  return (
    // Humne isko id="about" diya hai taaki nav bar se link ho sake
    <section id="about" style={styles.section}>
      
      {/* Left Column: Portrait Image */}
      <div style={styles.imageWrapper}>
        {/* Aap public folder wali kisi image ka naam yahan daal sakte hain */}
        <img 
          style={styles.image} 
          src="AboutImage.jpg" 
          alt="Celebrity Candid" 
        />
      </div>

      {/* Right Column: Editorial Text */}
      <div style={styles.content}>
        <h2 style={styles.heading}>The Journey & Vision</h2>
        
        <p style={styles.quote}>
          "Art is not what you see, but what you make others see. Every character is a new life lived."
        </p>
        
        <p style={styles.story}>
          A unique blend of engineering, performance, and digital storytelling, <strong>Vishal Dhairya</strong> is redefining what it means to be a modern creator. Transitioning seamlessly from the analytical world of Computer Science Engineering to the expressive realms of theater and film, his journey is driven by a passion for impactful storytelling. Through every character portrayed on screen and every narrative shared with his growing audience, he bridges the gap between technical precision and deep, artistic expression.
        </p>

        <p style={styles.quote}>
          "Art is where logic meets emotion. Whether it's through lines of code, a cinematic performance, or a story told to thousands online."
        </p>
      </div>

    </section>
  );
}

export default About;