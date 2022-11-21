import React from 'react'
import './article.css'

export default function Article({ img, date, title, link, featured }) {
  return (
    <div className={featured ? 'article featured' : 'article'}>
      <img
        src={img}
        alt=''
      />
      <div className='article-content'>
        <div>
          <p className='article-content_date'>{date}</p>
          <p className='article-content_title'>{title}</p>
        </div>
        <a
          href={link}
          className='article-content_link'
        >
          Read Full Article
        </a>
      </div>
    </div>
  )
}
