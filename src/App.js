import React, { useState } from 'react';
import CelebrityHero from './components/Hero'; // Sahi hai, aapki file Hero.js hi hai
import About from './components/About';
import CelebrityTimeline from './components/CelebrityTimeline'; // 🚀 Biography ki jagah ye naam hai
import CelebrityGallery from './components/CelebrityGallery';   // 🚀 Work ki jagah aapka ye gallery component hai
import CelebrityContact from './components/CelebrityContact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const celebrityData = {
    initials: "V.D.",
    name: "#VISHAL DHAIRYA",
    profession: "Computer Science Engineer, Actor & Youtuber",
    bio: "धैर्य सर्वस्य साधनम् ",
    imageUrl: "vishaldhairya.jpeg"
  };

  return (
    <div style={{ backgroundColor: '#faf9f6', minHeight: '100vh' }}>
      
      {/* Top Navbar Header */}
      <CelebrityHero 
        {...celebrityData} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />

      {/* Conditional Content Switch */}
      {currentPage === 'home' ? (
        <>
          <About />
          <CelebrityTimeline /> {/* 🚀 Naya Component Name yahan use kiya */}
          <CelebrityGallery />  {/* 🚀 Naya Component Name yahan use kiya */}
        </>
      ) : (
        <CelebrityContact />
      )}

      <Footer />
    </div>
  );
}

export default App;