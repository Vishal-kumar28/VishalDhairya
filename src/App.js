import React from 'react';
import CelebrityHero from './components/Hero';
import About from './components/About';
import CelebrityTimeline from './components/CelebrityTimeline';
import CelebrityGallery from './components/CelebrityGallery';
import CelebrityContact from './components/CelebrityContact';
import Footer from './components/Footer';
import './index.css'; // Global styles (including scroll behavior)

function App() {
  return (
    <div>
      {/* Hum yahan se attributes ke roop me data bhej rahe hain */}
    <CelebrityHero 
        initials="V.D."
        profession="Cinema Icon & Philanthropist"
        name="#Vishal Dhairya"
        bio="An icon of cinematic excellence spanning over five decades. Shaping the narrative of Indian cinema with powerful performances and an enduring global legacy."
        imageUrl="vishaldhairya.jpeg" // Example premium portrait
      />

    {/* 1. Biography section ke niche ise rakh diya */}  
      <About />

    {/* 2. Hero section ke bilkul niche ise rakh diya */}
      <CelebrityTimeline />  

    {/* 3. Timeline ke niche jod diya */}
      <CelebrityGallery />  

    {/* 4. Contact section ke niche jod diya */}
      <CelebrityContact />

    {/*Footer */}
      <Footer />

    </div>

  );
}

export default App;
