import React from 'react'
import './Articles.css'

function Articles() {
  const articles = [
    {
      title: "Lost ship",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Last supper",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Komando Okbichalonu",
      body: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    }  
]

  return (
    <div className='article_page'>
      <div className='left_nav'>
      </div>
      <div className='middle_sect'>
        <>
          { articles.map((article) => (
            <div>
              <h3>{ article.title }</h3> 
              <p>{article.body}</p>
            </div>
                     
          )) }  
        </>
              
      </div>
      <div className='right_sect'>
      </div>
    </div>
  )
}

export default Articles