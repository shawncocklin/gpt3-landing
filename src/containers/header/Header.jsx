import React from 'react'
import headerImg from '../../assets/ai.png'
import people from '../../assets/people.png'
import './header.css'

// TODO: style the input

export default function Header() {
  return (
    <div className='header section-padding' id='home'>
      <div className="header-content flow">
        <h1 className="gradient-text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque commodi eos harum, nostrum excepturi qui ipsa totam tenetur! Natus doloribus unde culpa architecto quae et exercitationem quam reprehenderit modi.</p>
        <form className='header-content_email-input'>
          <label htmlFor="email"></label>
          <input type="email" name='email' aria-label='email'/>
          <button type='button'>Get Started</button>
        </form>
        <div className='header-content_img-group'>
          <img src={people} alt="" />
          <p>1600 people requested access in the last 24 hours!</p>
        </div>
      </div>
      <div className="header-content_main-img">
        <img src={headerImg} alt="" />
      </div>
    </div>
  )
}
