import React, { useState } from 'react';
import CelebrityHero from './components/Hero';
import About from './components/About';
import CelebrityTimeline from './components/CelebrityTimeline';
import CelebrityGallery from './components/CelebrityGallery';
import CelebritySocial from './components/CelebritySocial'; // 🚀 Naya social section import kiya
import CelebrityContact from './components/CelebrityContact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const celebrityData = {
    initials: "V.D.",
    name: "#VISHAL DHAIRYA",
    profession: "Computer Science Engineer, Actor & Youtuber",
    bio: "धैर्य सर्वस्य साधनम्",
    imageUrl: "vishaldhairya.jpeg"
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-celebrity)', minHeight: '100vh' }}>
      
      <CelebrityHero 
        {...celebrityData} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />

      {currentPage === 'home' ? (
        <> 
          
          <About />
          <CelebrityTimeline />
          {/* <CelebritySocial /> */}
          <CelebrityGallery />
        </>
      ) : (
        <CelebrityContact />
      )}

      <Footer />
    </div>
  );
}

export default App;