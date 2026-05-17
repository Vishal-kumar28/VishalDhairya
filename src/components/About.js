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
      fontFamily: 'var(--font-sans)',
      fontSize: '1.05rem',
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
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600" 
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
          Spanning a career that has defined generations, [Vishal Dhairya] has consistently 
          pushed the boundaries of cinematic storytelling. From humble beginnings in theater 
          to becoming a global icon, the journey is built on artistic integrity, relentless 
          dedication, and a passion for deep, meaningful narratives. Beyond the silver screen, 
          they are deeply committed to social causes, using their global platform to advocate 
          for education and sustainability.
        </p>
      </div>

    </section>
  );
}

export default About;