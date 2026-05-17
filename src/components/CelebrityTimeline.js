import React from 'react';

function CelebrityTimeline() {
  // 1. Humne ek Array banaya jisme objects hain (saal aur milestone)
  const milestones = [
    { year: "1973", title: "Zanjeer", desc: "Established the 'Angry Young Man' persona that redefined Indian cinema." },
    { year: "1975", title: "Sholay & Deewaar", desc: "Starred in historic blockbusters, cementing global cinematic legacy." },
    { year: "2000", title: "Kaun Banega Crorepati", desc: "Revolutionized Indian television as the iconic host of KBC." },
    { year: "2015", title: "Piku (National Award)", desc: "Won his fourth National Film Award for Best Actor." }
  ];

  const styles = {
    section: {
      padding: '80px max(5vw, 20px)',
      backgroundColor: 'var(--bg-celebrity)',
      borderTop: '1px solid rgba(0,0,0,0.05)'
    },
    heading: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      fontWeight: '400',
      marginBottom: '50px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px'
    },
    card: {
      borderTop: '1px solid var(--accent-champagne)', // Premium subtle line
      paddingTop: '20px'
    },
    year: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.8rem',
      color: 'var(--accent-champagne)',
      margin: '0 0 10px 0'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: '600',
      margin: '0 0 10px 0',
      color: 'var(--text-onyx)'
    },
    desc: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: 'var(--text-slate)',
      fontWeight: '300'
    }
  };

  return (
    <section id="biography" style={styles.section}>
      <h2 style={styles.heading}>Selected Milestones</h2>
      
      <div style={styles.grid}>
        {/* 2. Yahan chal raha hai .map() ka jadu */}
        {milestones.map((item, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.year}>{item.year}</p>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CelebrityTimeline;