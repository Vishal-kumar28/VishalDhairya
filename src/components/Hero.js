import React from 'react';

// Humne function ke bracket () me 'props' likha hai
function CelebrityHero(props) {
  const styles = {
    // ... saari styles purane code jaisi hi rahengi ...
    container: {
      padding: '20px max(5vw, 20px)', // Mobile ke liye padding thodi kam ki
      minHeight: 'auto',              // ❌ '90vh' ko hata kar 'auto' kar diya taaki zabardasti space na bane
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',   // ❌ 'space-between' ko hata kar 'flex-start' kiya taaki content upar se shuru ho
      gap: '40px',                    // Nav bar aur content ke beech ka gap fix kar diya
    },
    nav: { display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '20px' },
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