import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

export default function Features() {
  return (
    <div
      className='features section-padding'
      id='features'
    >
      <div className='features-content'>
        <div className='features-content_title flow'>
          <h2 className='gradient-text'>
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <a
            className='gradient-text'
            href='#cta'
          >
            Request Early Access To Get Started
          </a>
        </div>
        <div className='features-content_feature-list flow'>
          <Feature
            title={'Lorem ipsum dolor sit.'}
            body={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque nihil aspernatur alias. Ea, quam!'
            }
            row={true}
            fontLarge={false}
          />
          <Feature
            title={'Lorem ipsum dolor sit.'}
            body={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque nihil aspernatur alias. Ea, quam!'
            }
            row={true}
            fontLarge={false}
          />
          <Feature
            title={'Lorem ipsum dolor sit.'}
            body={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque nihil aspernatur alias. Ea, quam!'
            }
            row={true}
            fontLarge={false}
          />
          <Feature
            title={'Lorem ipsum dolor sit.'}
            body={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque nihil aspernatur alias. Ea, quam!'
            }
            row={true}
            fontLarge={false}
          />
        </div>
      </div>
    </div>
  )
}
