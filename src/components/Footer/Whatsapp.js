import React from 'react';
import './Whatsapp.css';

function Whatsapp() {
  return (
    <a 
      href="https://wa.me/9072737314" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="Whatsapp_button"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}

export default Whatsapp;
