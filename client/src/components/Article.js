import React from 'react'
import NewArticle from './NewArticle';

function Article({articles}) {
    
    return (      
        <div>
            <NewArticle />
            <>
                { articles.map((article) => (
                    <div className='article_card' key={article.id}>
                        <h3>{ article.title }</h3> 
                        <p>{ article.body }</p>
                        <button>Comment</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>                     
                )) }  
            </>            
        </div>
  )
}

export default Article