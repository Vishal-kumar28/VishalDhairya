import React from 'react';

// Humne function ke bracket () me 'props' likha hai
function CelebrityHero(props) {
  const styles = {
    // ... saari styles purane code jaisi hi rahengi ...
    container: { padding: '40px max(5vw, 20px)', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
    nav: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '20px' },
    mainContent: { display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px', margin: '60px 0' },
    tagline: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-slate)', marginBottom: '20px' },
    celebrityName: { fontFamily: 'var(--font-serif)', fontSize: '5.5rem', fontWeight: '400', lineHeight: '1.0', margin: '0 0 30px 0', textTransform: 'uppercase' },
    bioExcerpt: { fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-slate)', maxWidth: '450px' },
    imageWrapper: { width: '100%', maxWidth: '450px', height: '600px', border: '1px solid var(--accent-champagne)', padding: '12px' },
    image: { width: '100%', height: '100%', objectFit: 'cover' }
  };

  return (
    <div style={styles.container}>
      <header style={styles.nav}>
        <div>{props.initials}</div> {/* Dynamic Initials */}
        <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT</a>
        <a href="#biography" style={{ textDecoration: 'none', color: 'inherit' }}>BIOGRAPHY</a>
        <a href="#work" style={{ textDecoration: 'none', color: 'inherit' }}>WORK</a>
        <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT</a>
  </div>
      </header>

      <main style={styles.mainContent}>
        <div>
          {/* JSX me variable use karne ke liye {} lagate hain */}
          <p style={styles.tagline}>{props.profession}</p> 
          <h1 style={styles.celebrityName}>{props.name}</h1> 
          <p style={styles.bioExcerpt}>{props.bio}</p>
        </div>

        <div>
          <div style={styles.imageWrapper}>
            <img style={styles.image} src={props.imageUrl} alt={props.name} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CelebrityHero;