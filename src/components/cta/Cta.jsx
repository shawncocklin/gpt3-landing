import React from 'react'
import './cta.css'

export default function Cta() {
  return (
    <div
      className='cta section-margin gradient-bar'
      id='cta'
    >
      <div className='cta-body'>
        <p className='cta-body_caption'>Request Early Access To Get Started</p>
        <p className='cta-body_message'>
          Register today & start exploring the endless possiblities.
        </p>
      </div>
      <div className='cta-button'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}
