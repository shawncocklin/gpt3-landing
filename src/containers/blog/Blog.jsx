import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { img01, img02, img03, img04, img05 } from './index'
export default function Blog() {
  return (
    <div
      className='blog section-padding'
      id='blog'
    >
      <h2 className='gradient-text'>
        A lot is happening, We are blogging about it.
      </h2>
      <div className='blog_article-container'>
        <Article
          img={img01}
          date={'Sep 26, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          link='#'
          featured={true}
        />
        <Article
          img={img05}
          date={'Sep 27, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          link='#'
          featured={false}
        />
        <Article
          img={img02}
          date={'Sep 28, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          link='#'
          featured={false}
        />
        <Article
          img={img03}
          date={'Sep 29, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          link='#'
          featured={false}
        />
        <Article
          img={img04}
          date={'Sep 30, 2021'}
          title={'GPT-3 and Open  AI is the future. Let us exlore how it is?'}
          link='#'
          featured={false}
        />
      </div>
    </div>
  )
}
