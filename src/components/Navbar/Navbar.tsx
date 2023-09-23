import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="chatbot__navbar">
      <div className="chatbot__navbar-links">
        <div className="chatbot__navbar-links_header">
          <h1><Link to={'/'}>Chatbot</Link></h1>
        </div>
        <div className="chatbot__navbar-links_container">
          <p><Link to={'/openai'}>Open AI</Link></p>
          <p><Link to={'/features'}>Features</Link></p>
          <p><Link to={'/blog'}>About Us</Link></p>
        </div>
      </div>
</div>
)}

export default Navbar