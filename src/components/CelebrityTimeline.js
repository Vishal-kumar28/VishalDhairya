import React from 'react';

function CelebrityTimeline() {
  const milestones = [
    {
      year: "2026",
      title: "Inside The Match",
      desc: "My most watched video on YouTube, where I take viewers — breaking down what really happens inside an IPL match",
      youtube: {
        id: "l3hWFn1J2Fw",
        views: "10K Views",
      }
    },
    // {
    //   year: "2026",
    //   title: "Inside The Match",
    //   desc: "I explore the Content creation space.",
    //   youtube: {
    //     id: "-55BwfZ82dE",
    //     views: "6.5K Views",
    //   }
    // },
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
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px'
    },
    card: {
      borderTop: '1px solid var(--accent-champagne)',
      paddingTop: '20px'
    },
    year: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.8rem',
      color: 'var(--accent-champagne)',
      margin: '0 0 10px 0',
      justifyContent: 'center',
      display: 'flex',
    },
    title: {
      
      fontFamily: 'var(--font-serif)',
      fontSize: '1.2rem',
      margin: '0 0 10px 0',
      color: 'var(--text-onyx)',
      justifyContent: 'center',
      display: 'flex',
    },
    desc: {
      fontSize: '0.95rem',
      lineHeight: '1.6',
      color: 'var(--text-slate)',
      fontWeight: '300',
      margin: '0 0 16px 0',
      justifyContent: 'center',
      display: 'flex',
    },
    videoWrapper: {
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      aspectRatio: '16/9',   // ← changed from 16/9
      border: '1px solid rgba(180,150,100,0.3)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
      backgroundColor: '#000',
      cursor: 'pointer',
      width: '50%',          // ← smaller since it's vertical
      margin: '40px auto',

    },
    videoThumb: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.4s ease, opacity 0.3s ease',
      justifyContent: 'center',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '52px',
      height: '52px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
    },
    playTriangle: {
      width: 0,
      height: 0,
      borderTop: '9px solid transparent',
      borderBottom: '9px solid transparent',
      borderLeft: '16px solid #1a1a1a',
      marginLeft: '4px',

    },
    videoViews: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      backgroundColor: 'rgba(0,0,0,0.55)',
      color: 'rgba(255,255,255,0.88)',
      fontSize: '0.70rem',
      letterSpacing: '0.5px',
      padding: '3px 8px',
      borderRadius: '2px',
      backdropFilter: 'blur(4px)',
      justifyContent: 'center',
      display: 'flex',
    }
  };

  const [playingId, setPlayingId] = React.useState(null);

  return (
    <section id="biography" style={styles.section}>
      <h2 style={styles.heading}>Selected Milestones</h2>

      <div style={styles.grid}>
        {milestones.map((item, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.year}>{item.year}</p>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>

            {item.youtube && (
              <div style={styles.videoWrapper}>
                {playingId === index ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.youtube.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <div
                    onClick={() => setPlayingId(index)}
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.youtube.id}/maxresdefault.jpg`}
                      alt={item.title}
                      style={styles.videoThumb}
                      onMouseEnter={e => { e.target.style.transform = 'scale(1.03)'; e.target.style.opacity = '0.85'; }}
                      onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.opacity = '1'; }}
                    />
                    <span style={styles.videoViews}>{item.youtube.views}</span>
                    <div style={styles.playButton}>
                      <div style={styles.playTriangle} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CelebrityTimeline;