import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <div className='footer section-padding'>
      <div className='footer-cta flow'>
        <h2 className='gradient-text'>
          Do you want to step in to the future before others
        </h2>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='footer-nav'>
        <div className='footer-nav_logo'>
          <img
            src={logo}
            alt=''
          />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='footer-nav_links'>
          <ul
            role='list'
            className='flow'
          >
            <li className='bold'>Links</li>
            <li>
              <a href='#'>Overons</a>
            </li>
            <li>
              <a href='#'>Social Media</a>
            </li>
            <li>
              <a href='#'>Counters</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-nav_company'>
          <ul
            role='list'
            className='flow'
          >
            <li className='bold'>Company</li>
            <li>
              <a href='#'>Terms & Conditions</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-nav_contact flow'>
          <p className='bold'>Get in touch</p>
          <p>Crechterwoord K12 182 DK Alknjkcb`</p>
          <p>085-132567</p>
          <a
            href='#'
            className='inline-block'
          >
            info@payme.net
          </a>
        </div>
      </div>
      <div className='footer-copywrite'>&copy; GPT-3, All rights reserved</div>
    </div>
  )
}
