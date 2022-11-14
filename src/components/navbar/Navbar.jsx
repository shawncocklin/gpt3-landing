import React from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-links-group">
        <div className="navbar-links-group_logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar-links-group_links" role='list'>
          <li><a href="home">Home</a></li>
          <li><a href="whatis">What is GPT3?</a></li>
          <li><a href="features">Open AI</a></li>
          <li><a href="possibility">Case Studies</a></li>
          <li><a href="blog">Library</a></li>
        </ul>
      </div>
      <div className="navbar-btn-group">
        <a href="#">Sign In</a>
        <button type='button'>Sign Up</button>
      </div>
    </div>
  )
}
