import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
      <div className="chatbot__navbar-sign">
        <button type='button' className='chatbot__navbar-sign-in'>Sign in</button>
        <button type='button' className='chatbot__navbar-sign-up'>Sign up</button>
      </div>
      <div className="chatbot__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="chatbot__navbar-menu_container scale-up-center">
          <div className="chatbot__navbar-menu_container-links">
          <p><Link to={'/openai'}>Open AI</Link></p>
          <p><Link to={'/features'}>Features</Link></p>
          <p><Link to={'/blog'}>About Us</Link></p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar