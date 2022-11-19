import React from 'react'
import './possibility.css'
import possibilityImg from '../../assets/possibility.png'

export default function Possibility() {
  return (
    <div className='possibility section-padding'>
      <div className='possibility-content_img'>
        <img
          src={possibilityImg}
          alt=''
        />
      </div>
      <div className='possibility-content_body'>
        <h2 className='gradient-text'>
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a
          href='#cta'
          className='gradient-text'
        >
          Request Early Access To Get Started
        </a>
      </div>
    </div>
  )
}
