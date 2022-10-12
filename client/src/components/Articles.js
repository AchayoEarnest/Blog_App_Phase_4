import { useState, useEffect } from 'react';
import Article from './Article';
import React from 'react';
import './Articles.css'
import NewArticle from './NewArticle';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then(setArticles)
  },[])


  return (
    <div className='article_page'>
      <div className='left_nav'>
      </div>
      <div className='middle_sect'>
        <Article articles={ articles } />   
      </div>
      <div className='right_sect'>
      </div>
    </div>
  )
}

export default Articles