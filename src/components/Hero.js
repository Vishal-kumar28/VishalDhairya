import React from 'react';

// Humne function ke bracket () me 'props' likha hai
function CelebrityHero(props) {
  const styles = {
    // ... saari styles purane code jaisi hi rahengi ...
    container: {
      padding: '120px max(5vw, 20px) 40px max(5vw, 20px)', // Mobile ke liye padding thodi kam ki
      minHeight: 'auto',              // ❌ '90vh' ko hata kar 'auto' kar diya taaki zabardasti space na bane
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',   // ❌ 'space-between' ko hata kar 'flex-start' kiya taaki content upar se shuru ho
      gap: '40px',                    // Nav bar aur content ke beech ka gap fix kar diya
    },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '20px max(5vw, 20px)', boxSizing: 'border-box', letterSpacing: '1px', position: 'fixed', top: '0', left: '0', zIndex: 1000, backgroundColor: 'rgba(250, 249, 246, 0.85)', backdropFilter: 'blur(10px)', },
    mainContent: {
      display: 'grid',
      // 💡 Ye line responsive grid banayegi: Mobile par upar-niche (1fr) aur Laptop par aamne-saamne (repeat(auto-fit...))
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      alignItems: 'center',
      gap: '30px',                    // Text aur Photo ke beech ka gap
      margin: '20px 0',
    },
    tagline: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-slate)', marginBottom: '20px' },
      celebrityName: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'max(3rem, 5vw)',     // 💡 Mobile screen par text automatic chota ho jayega taaki screen se bahar na bhage
      fontWeight: '400',
      lineHeight: '1.1',
      margin: '0 0 20px 0',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
    },
    bioExcerpt: { fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-slate)', maxWidth: '450px' },
    imageWrapper: {
    width: '100%',
    maxWidth: '380px',              // Mobile ke hisab se image wrapper ka size thoda adjust kiya
    height: 'auto',
    aspectRatio: '3/4',             // Image ka shape vertical luxury rectangle hi rahega
    border: '1px solid var(--accent-champagne)',
    padding: '12px',
    margin: '0 auto',               // Mobile par photo center me dikhegi
  },
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
        <div className="animate-fade-up" style={styles.textContent}>
          <span style={styles.tagline}>{props.profession}</span>
          <h1 style={styles.celebrityName}>{props.name}</h1>
          <p style={styles.bioExcerpt}>{props.bio}</p>
        </div>

        <div className="animate-fade-in">
          <div style={styles.imageWrapper}>
            <img style={styles.image} src={props.imageUrl} alt={props.name} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CelebrityHero;