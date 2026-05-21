import React, { useState } from 'react';

function CelebrityHero(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const styles = {
    container: {
      padding: '140px max(5vw, 20px) 40px max(5vw, 20px)', 
      minHeight: 'auto',              
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
    },
    nav: { 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '100%', 
      fontFamily: 'var(--font-serif)', 
      fontSize: '1.2rem', 
      borderBottom: '1px solid rgba(0,0,0,0.05)', 
      padding: '25px max(5vw, 20px)', 
      boxSizing: 'border-box', 
      letterSpacing: '1px', 
      position: 'fixed', 
      top: '0', 
      left: '0', 
      zIndex: 2000, 
      backgroundColor: 'rgba(250, 249, 246, 0.85)', 
      backdropFilter: 'blur(10px)', 
    },
    overlayMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#faf9f6', 
      zIndex: 1500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)', 
    },
    overlayNav: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '35px',
    },
    menuLink: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem', 
      textDecoration: 'none',
      color: 'inherit',
      letterSpacing: '3px',
      fontWeight: '300',
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      alignItems: 'center',
      gap: '30px',                    
      margin: '20px 0',
    },
    tagline: { fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--text-slate)', marginBottom: '20px' },
    celebrityName: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'max(3rem, 5vw)',     
      fontWeight: '400',
      lineHeight: '1.1',
      margin: '0 0 20px 0',
      textTransform: 'uppercase',
      letterSpacing: '-1px',
    },
    bioExcerpt: { fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-slate)', maxWidth: '450px' },
    imageWrapper: {
      width: '100%',
      maxWidth: '380px',              
      height: 'auto',
      aspectRatio: '3/4',             
      border: '1px solid var(--accent-champagne)',
      padding: '12px',
      margin: '0 auto',               
    },
    image: { width: '100%', height: '100%', objectFit: 'cover' }
  };

  return (
    <div id="home" style={styles.container}>
      <header style={styles.nav}>
        <div>{props.initials}</div> 
        
        {/* 🚀 LAPTOP LINKS (Inme custom CSS classes lagayi hain) */}
        {/* href="#" ki jagah onClick lagayein aur '#' hata dein */}
        <div className="desktop-links">
          <button 
            onClick={() => props.setCurrentPage('home')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: props.currentPage === 'home' ? 'var(--accent-champagne)' : 'inherit' }}
            className="desktop-link"
          >
            HOME
          </button>
          <button 
            onClick={() => props.setCurrentPage('contact')} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: props.currentPage === 'contact' ? 'var(--accent-champagne)' : 'inherit' }}
            className="desktop-link"
          >
            CONTACT
          </button>
        </div>

        {/* 🚀 MOBILE MENU BUTTON */}
        <button onClick={toggleMenu} className="mobile-menu-btn">
          {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </header>

      {/* MOBILE OVERLAY */}
      <div 
        className="mobile-overlay"
        style={{
          ...styles.overlayMenu,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-30px)'
        }}
      >
        <nav style={styles.overlayNav}>
          <button 
            onClick={() => {
              props.setCurrentPage('home');
              toggleMenu();
            }}
            style={styles.menuLink}
          >
            HOME
          </button>
          <button 
            onClick={() => {
              props.setCurrentPage('contact');
              toggleMenu();
            }}
            style={styles.menuLink}
          >
            CONTACT
          </button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <main style={styles.mainContent}>
        <div className="animate-fade-up" style={styles.textContent}>
          <span style={styles.tagline}>{props.profession}</span>
          <h1 style={styles.celebrityName}>{props.name}</h1>
          <p style={styles.bioExcerpt}>{props.bio}</p>
        </div>

        <div className="animate-luxury-photo">
          <div style={styles.imageWrapper}>
            <img style={styles.image} src={props.imageUrl} alt={props.name} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CelebrityHero;