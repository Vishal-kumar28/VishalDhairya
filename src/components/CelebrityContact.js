import React, { useState } from 'react';

function CelebrityContact() {
  // 1. Form ke saare inputs ke liye ek single State Object banaya
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. State badalne ka function (Jab bhi user kuch type karega)
  const handleChange = (e) => {
    const { name, value } = e.target;
    // ...formData ka matlab hai purana data safe rahe, aur sirf badla hua field update ho
    setFormData({
      ...formData,
      [name]: value 
    });
  };

  // 3. Form submit hone par kya hoga
  const handleSubmit = async (e) => {
  e.preventDefault();

  // Yahan Formspree ka diya hua apna real URL daalein
  const formspreeUrl = "https://formspree.io/f/mbdbrzrz";

  try {
    const response = await fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Hamara state ka data JSON me badal gaya
    });

    if (response.ok) {
      alert(`Thank you ${formData.name}! Your message has been sent directly to the team.`);
      // Form ko khali karne ke liye
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error sending form:", error);
    alert("Connection error. Please check your internet.");
  }
};

  const styles = {
    section: { padding: '80px max(5vw, 20px)', backgroundColor: 'var(--bg-celebrity)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', borderTop: '1px solid rgba(0,0,0,0.05)' },
    infoColumn: { display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    heading: { fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '20px', textTransform: 'uppercase' },
    text: { color: 'var(--text-slate)', lineHeight: '1.8', marginBottom: '30px' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    input: { padding: '15px', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid var(--text-slate)', color: 'var(--text-onyx)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none' },
    textarea: { padding: '15px', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid var(--text-slate)', color: 'var(--text-onyx)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none', height: '100px', resize: 'none' },
    button: { alignSelf: 'flex-start', padding: '12px 35px', backgroundColor: 'var(--text-onyx)', color: 'var(--bg-celebrity)', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px', transition: '0.3s' }
  };

  return (
    <section id="contact" style={styles.section}>
      {/* Left Side: Booking / Press Info */}
      <div style={styles.infoColumn}>
        <h2 style={styles.heading}>Management & Booking</h2>
        <p style={styles.text}>
          For press inquiries, brand endorsements, and film bookings, please fill out the official form. 
          Our management team will get back to you within 48 hours.
        </p>
        <p style={{ color: 'var(--accent-champagne)', fontWeight: '600' }}>vishaldhairya28@gmail.com</p>
      </div>

      {/* Right Side: Actual Form */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="YOUR NAME" 
          value={formData.name} 
          onChange={handleChange} // Click/Type event handle karega
          required 
          style={styles.input}
        />
        <input 
          type="email" 
          name="email" 
          placeholder="YOUR EMAIL ADDRESS" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
        <input 
          type="text" 
          name="subject" 
          placeholder="SUBJECT" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
          style={styles.input}
        />
        <textarea 
          name="message" 
          placeholder="YOUR MESSAGE" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </section>
  );
}

export default CelebrityContact;