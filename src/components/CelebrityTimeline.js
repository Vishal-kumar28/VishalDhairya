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
    {
      year: "2026",
      title: "Inside The Match",
      desc: "An in-depth look into the metrics, creative decisions, and behind-the-scenes effort that goes into building a brand in the digital content creation era.",
      youtube: {
        id: "-55BwfZ82dE",
        views: "6.5K Views",
      }
    },
    {
      year: "2026",
      title: "Inside The Match",
      desc: "An in-depth look into the metrics, creative decisions, and behind-the-scenes effort that goes into building a brand in the digital content creation era.",
      youtube: {
        id: "Bus6L6JMbP4",
        views: "1.5K Views",
      }
    },
  ];

  const styles = {
    section: {
      padding: '100px max(5vw, 20px)',
      backgroundColor: 'var(--bg-celebrity)',
      borderTop: '1px solid rgba(0,0,0,0.05)'
    },
    heading: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.5rem',
      fontWeight: '400',
      marginBottom: '80px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      textAlign: 'center',
    },
    // Main container flex list banaya
    listContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '100px', // Har row ke beech ka gap
    },
    // Ek single row ka common layout
    milestoneRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '5%',
      flexWrap: 'wrap', // Taki mobile par responsive upar-niche aa sake
    },
    // Left/Right side content column
    textColumn: {
      flex: '1 1 45%', // Laptop par 45% width lega
      minWidth: '280px',
    },
    // Video section wrapper container
    videoColumn: {
      flex: '1 1 45%', // Laptop par 45% width lega
      minWidth: '280px',
    },
    year: {
      fontFamily: 'var(--font-serif)',
      fontSize: '2.2rem',
      color: 'var(--accent-champagne)',
      margin: '0 0 10px 0',
    },
    title: {
      fontFamily: 'var(--font-serif)',
      fontSize: '1.6rem',
      margin: '0 0 15px 0',
      color: 'var(--text-onyx)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    desc: {
      fontSize: '1.05rem',
      lineHeight: '1.8',
      color: 'var(--text-slate)',
      fontFamily: 'var(--font-serif)',
      fontWeight: '300',
      margin: '0 0 24px 0',
    },
    videoWrapper: {
      position: 'relative',
      borderRadius: '4px',
      overflow: 'hidden',
      aspectRatio: '9/16', // Vertical videos ke liye 9/16 aspect ratio set kiya
      border: '1px solid rgba(180,150,100,0.3)',
      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
      backgroundColor: '#000',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '320px', // Vertical video ko clean frame dene ke liye width limit kiya
      margin: '0 auto',  // Container me center align karne ke liye
    },
    videoThumb: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
    },
    playTriangle: {
      width: 0,
      height: 0,
      borderTop: '10px solid transparent',
      borderBottom: '10px solid transparent',
      borderLeft: '16px solid #1a1a1a',
      marginLeft: '4px',
    },
    videoViews: {
      position: 'absolute',
      bottom: '15px',
      right: '15px',
      backgroundColor: 'rgba(0,0,0,0.65)',
      color: 'rgba(255,255,255,0.9)',
      fontSize: '0.75rem',
      letterSpacing: '0.5px',
      padding: '4px 10px',
      borderRadius: '2px',
      backdropFilter: 'blur(4px)',
    }
  };

  const [playingId, setPlayingId] = React.useState(null);

  return (
    <section id="biography" style={styles.section}>
      <h2 style={styles.heading}>Videos</h2>

      <div style={styles.listContainer}>
        {milestones.map((item, index) => {
          // 🔥 MAGIC LINE: Agar index odd (1, 3, 5) hai toh layout reverse ho jayega (Zigzag Look)
          const isReversed = index % 2 !== 0;

          return (
            <div 
              key={index} 
              style={{
                ...styles.milestoneRow,
                flexDirection: isReversed ? 'row-reverse' : 'row'
              }}
            >
              {/* TEXT COLUMN */}
              <div style={styles.textColumn}>
                <p style={styles.year}>{item.year}</p>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.desc}</p>
              </div>

              {/* VIDEO COLUMN */}
              <div style={styles.videoColumn}>
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
                          onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; e.target.style.opacity = '0.9'; }}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CelebrityTimeline;