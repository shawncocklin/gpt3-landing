import React from 'react'
import {atlassian, dropbox, google, shopify, slack} from './index'
import './brand.css'

export default function Brand() {
  return (
    <div className='brand section-padding'>
      <div><img src={atlassian} alt="" /></div>
      <div><img src={dropbox} alt="" /></div>
      <div><img src={google} alt="" /></div>
      <div><img src={shopify} alt="" /></div>
      <div><img src={slack} alt="" /></div>
    </div>
  )
}
