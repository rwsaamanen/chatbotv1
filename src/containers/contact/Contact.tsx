import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='Contact__header'>
        <h1>Contact us</h1>
      </div>
      <div className='Contact__boxContainer'>
        <div className='Contact__box'>
          <h2>Support</h2>
          <p>Get help with our products and services</p>
          <button className='Contact__button'>Get support</button>
        </div>
        <div className='Contact__box'>
          <h2>Sales</h2>
          <p>Learn more about our products</p>
          <button className='Contact__button'>Contact sales</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
