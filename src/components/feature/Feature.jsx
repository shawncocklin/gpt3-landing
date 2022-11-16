import React from 'react'
import './feature.css'

export default function Feature({ title, body, row }) {
  return (
    <div
      className='feature'
      style={row ? { flexDirection: 'row' } : { flexDirection: 'column' }}
    >
      <div className='feature-title'>
        <p>{title}</p>
      </div>
      <div className='feature-body'>
        <p>{body}</p>
      </div>
    </div>
  )
}
