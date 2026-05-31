import React, { useState } from 'react'; // 1. useState ko import kiya

function CelebrityGallery() {
  // 2. State define ki: 'currentCategory' variable hai, aur 'setCurrentCategory' use badalne ka function hai.
  // Shuruat me humne iski value "all" rakhi hai.
  const [currentCategory, setCurrentCategory] = useState('all');

  const photos = [
    { id: 1, category: 'movies', url: 'Movie-shoot.jpg', title: 'Movie Shoot' },
    { id: 2, category: 'events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400', title: 'Red Carpet' },
    { id: 3, category: 'magazine', url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400', title: 'Vogue Cover' },
    { id: 4, category: 'movies', url: 'BTS.jpg', title: 'Behind The Scenes' },
    { id: 5, category: 'movies', url: 'V1.jpg', title: 'Photo Session' },
  ];

  // 3. Jo photos select hui category se match karengi, unhe filter karenge
  const filteredPhotos = currentCategory === 'all' 
    ? photos 
    : photos.filter(p => p.category === currentCategory);

  const styles = {
    section: { padding: '80px max(5vw, 20px)', backgroundColor: 'var(--bg-celebrity)', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', },
    heading: { fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '30px', textTransform: 'uppercase', fontWeight: '400', },
    filterContainer: { marginBottom: '40px', display: 'flex', justifyContent: 'center', gap: '20px' },
    button: (isActive) => ({
      padding: '10px 20px',
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: isActive ? '2px solid var(--accent-champagne)' : '2px solid transparent',
      color: isActive ? 'var(--text-onyx)' : 'var(--text-slate)',
      cursor: 'pointer',
      fontFamily: 'var(--font-serif)',
      fontSize: '1.1rem',
      textTransform: 'uppercase',
      transition: 'all 0.3s'
    }),
    
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    img: { width: '100%', height: '300px', objectFit: 'cover', filter: 'grayscale(20%)' }
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
            onClick={() => setCurrentCategory(cat)} // 4. Click hote hi State change hogi!
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={styles.grid}>
        {filteredPhotos.map(photo => (
          <div key={photo.id}>
            <img style={styles.img} src={photo.url} alt={photo.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CelebrityGallery;