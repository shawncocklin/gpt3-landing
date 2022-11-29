import { React, useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

function MobileNav() {
  return (
    <div className='navbar-mobile-menu_container scale-up-center'>
      <ul
        className='navbar-mobile-menu_container-links'
        role='list'
      >
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#whatis'>What is GPT3?</a>
        </li>
        <li>
          <a href='#features'>Open AI</a>
        </li>
        <li>
          <a href='#possibility'>Case Studies</a>
        </li>
        <li>
          <a href='#blog'>Library</a>
        </li>
      </ul>
      <div className='navbar-mobile-menu_btn-group'>
        <button type='button'>Sign Up</button>
        <a href='#'>Sign In</a>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links-group'>
        <div className='navbar-links-group_logo'>
          <img
            src={logo}
            alt=''
          />
        </div>
        <ul
          className='navbar-links-group_links'
          role='list'
        >
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#whatis'>What is GPT3?</a>
          </li>
          <li>
            <a href='#features'>Open AI</a>
          </li>
          <li>
            <a href='#possibility'>Case Studies</a>
          </li>
          <li>
            <a href='#blog'>Library</a>
          </li>
        </ul>
      </div>
      <div className='navbar-btn-group'>
        <a href='#'>Sign In</a>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar-mobile-menu'>
        {toggleMenu ? (
          <RiCloseLine
            className='menu-toggle-close'
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className='menu-toggle-open'
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && <MobileNav />}
      </div>
    </div>
  )
}
