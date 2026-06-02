import React, { useState } from 'react';

function CelebrityGallery() {
  const [currentCategory, setCurrentCategory] = useState('all');

  // 🚀 Har photo mein alag size dene ke liye 'span' configurations jode hain
  const photos = [
    { 
      id: 1, 
      category: 'movies', 
      url: 'Stive.jpg', 
      title: 'Movie Shoot',
      span: { gridColumn: 'span 4', gridRow: 'span 2', height: '620px' } // Badi vertical photo (Left side)
    },
    { 
      id: 2, 
      category: 'events', 
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600', 
      title: 'Red Carpet',
      span: { gridColumn: 'span 4', gridRow: 'span 1', height: '300px' } // Top-middle horizontal photo
    },
    { 
      id: 3, 
      category: 'magazine', 
      url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600', 
      title: 'Vogue Cover',
      span: { gridColumn: 'span 4', gridRow: 'span 2', height: '620px' } // Right side full height photo
    },
    { 
      id: 4, 
      category: 'movies', 
      url: 'BTS.jpg', 
      title: 'Behind The Scenes',
      span: { gridColumn: 'span 4', gridRow: 'span 1', height: '300px' } // Bottom-middle square photo
    },
    { 
      id: 5, 
      category: 'movies', 
      url: 'V1.jpg', 
      title: 'Photo Session',
      span: { gridColumn: 'span 4', gridRow: 'span 1', height: '300px' } // Bottom full-width cinematic banner
    },
    { 
      id: 6, 
      category: 'movies', 
      url: 'vishaldhairya.jpeg', 
      title: 'Photo Session',
      span: { gridColumn: 'span 4', gridRow: 'span 2', height: '620px' } // Bottom full-width cinematic banner
    },
    { 
      id: 7, 
      category: 'movies', 
      url: 'fog.jpg', 
      title: 'Photo Session',
      span: { gridColumn: 'span 4', gridRow: 'span 2', height: '620px' } // Bottom full-width cinematic banner
    },
    { 
      id: 8, 
      category: 'movies', 
      url: 'AboutImage.jpg', 
      title: 'Photo Session',
      span: { gridColumn: 'span 4', gridRow: 'span 1', height: '300px' } // Bottom full-width cinematic banner
    },
    
  ];

  const filteredPhotos = currentCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === currentCategory);

  const styles = {
    section: { 
      padding: '100px max(5vw, 20px)', 
      backgroundColor: 'var(--bg-celebrity)', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(0,0,0,0.05)', 
    },
    heading: { 
      fontFamily: 'var(--font-serif)', 
      fontSize: '2.5rem', 
      marginBottom: '30px', 
      textTransform: 'uppercase', 
      fontWeight: '400', 
      letterSpacing: '2px'
    },
    filterContainer: { 
      marginBottom: '50px', 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '25px',
      flexWrap: 'wrap'
    },
    button: (isActive) => ({
      padding: '8px 16px',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: isActive ? '2px solid var(--accent-champagne)' : '2px solid transparent',
      color: isActive ? 'var(--text-onyx)' : 'var(--text-slate)',
      cursor: 'pointer',
      fontFamily: 'var(--font-serif)',
      fontSize: '0.85rem',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontWeight: '500',
      transition: 'all 0.3s ease'
    }),
    // 🚀 Master 12-column Bento Grid Layout
    grid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(12, 1fr)', 
      gap: '15px', // Photos ke beech ka clean minimalistic gap
      maxWidth: '1200px',
      margin: '0 auto'
    },
    // Card Wrapper jo har image ka custom span handle karega
    card: (customSpan) => ({
      gridColumn: customSpan.gridColumn,
      gridRow: customSpan.gridRow,
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: '#f0f0f0',
      borderRadius: '2px',
    }),
    img: (customHeight) => ({ 
      width: '100%', 
      height: customHeight, 
      objectFit: 'cover', 
      display: 'block',
      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
    })
  };

  return (
    <section id="work" style={styles.section}>
      <h2 style={styles.heading}>Media Gallery</h2>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        {['all', 'movies', 'events', 'magazine'].map(cat => (
          <button 
            key={cat}
            style={styles.button(currentCategory === cat)}
            onClick={() => setCurrentCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🚀 Dynamic Magazine Asymmetric Grid */}
      <div className="magazine-grid" style={styles.grid}>
        {filteredPhotos.map(photo => (
          <div 
            key={photo.id} 
            className="gallery-card"
            style={styles.card(photo.span)}
          >
            <img 
              style={styles.img(photo.span.height)} 
              src={photo.url} 
              alt={photo.title} 
              onMouseEnter={e => e.target.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CelebrityGallery;