import React from 'react'
import './whatis.css'
import { Feature } from '../../components/index'

export default function WhatIs() {
  return (
    <div
      className='whatis flow section-margin'
      id='whatis'
    >
      <Feature
        title='What is GPT-3'
        body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id laudantium explicabo sit quam provident cum quo, nam fugit eius dolores animi nemo optio enim at sapiente, expedita ullam necessitatibus?'
        row={true}
      />
      <div className='whatis-content'>
        <h2 className='gradient-text'>
          The possibilities are beyond your imagination
        </h2>
        <a
          href='#blog'
          className='gradient-text'
        >
          Explore the Library
        </a>
      </div>
      <div className='whatis-feature-list'>
        <Feature
          title='Chatbots'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id laudantium explicabo sit quam provident cum quo, nam fugit eius dolores animi nemo optio enim at sapiente, expedita ullam necessitatibus?'
          row={false}
        />
        <Feature
          title='Knowledgebase'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id laudantium explicabo sit quam provident cum quo, nam fugit eius dolores animi nemo optio enim at sapiente, expedita ullam necessitatibus?'
          row={false}
        />
        <Feature
          title='Education'
          body='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id laudantium explicabo sit quam provident cum quo, nam fugit eius dolores animi nemo optio enim at sapiente, expedita ullam necessitatibus?'
          row={false}
        />
      </div>
    </div>
  )
}
