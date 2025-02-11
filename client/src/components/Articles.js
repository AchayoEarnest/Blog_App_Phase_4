import { useState, useEffect } from 'react';
import Article from './Article';
import React from 'react';
import './Articles.css'
import NewArticle from './NewArticle'


function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((res) => res.json())
      .then(setArticles)
  }, [])
  
  const deleteArticle = async (id) => {
    await fetch(`/articles/${id}`, {
      method: 'DELETE',
    })

    setArticles(articles.filter((article) => article.id !== id ))
  }
  

  return (
    <div className='article_page'>
      <div className='left_nav'>
        <div className="Account_Info">
            <img className="Account_Image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fd3LvBNTzUGkRTqBX2UMvbrbzNuzShL4ll3pI5YUZg&s"
                alt="example"
            />
           
            <div className="edit-btn">
              <button type="submit" className="edit-btn" >Edit Account</button>
            </div>
        </div>
      </div>
      <div className='middle_sect'>
        <NewArticle />
        <Article articles={ articles } onDelete={deleteArticle} />   
      </div>
      <div className='right_sect'>

      </div>
    </div>
  )
}

export default Articles