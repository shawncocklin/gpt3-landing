import React from 'react'
import './feature.css'

// TODO: fix the accent line above the title

const styleLargeTitle = {
  fontSize: `${24}px`,
  lineHeight: 1.5,
}

const styleLargeBody = {
  fontSize: `${18}px`,
  lineHeight: 1.7,
}

const styleSmallTitle = {
  fontSize: `${18}px`,
  lineHeight: 1.2,
}

const styleSmallBody = {
  fontSize: `${14}px`,
  lineHeight: 1.5,
}

export default function Feature({ title, body, row, fontLarge }) {
  return (
    <div
      className='feature'
      style={row ? { flexDirection: 'row' } : { flexDirection: 'column' }}
    >
      <div
        className='feature-title'
        style={fontLarge ? styleLargeTitle : styleSmallTitle}
      >
        <p>{title}</p>
      </div>
      <div
        className='feature-body'
        style={fontLarge ? styleLargeBody : styleSmallBody}
      >
        <p>{body}</p>
      </div>
    </div>
  )
}
