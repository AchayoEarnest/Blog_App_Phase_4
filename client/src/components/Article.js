import React from 'react'
import NewArticle from './NewArticle';

function Article({ articles }) {
    
    const onDelete = async (id) => {
        await fetch(`/articles/${id}`, {
            method: 'DELETE',
        })
    }
    
    return (      
        <div>
            
            <>
                <div>
                    <button type="submit" className="btn-post" >Add Article</button>
                </div>
                <h2>Articles</h2>
                <div>
                    { articles.map((article) => (
                        <div className='article_card' key={article.id}>
                            <h3>{ article.title }</h3> 
                            <p>{ article.body }</p>
                            <button>Comment</button>
                            <button>Edit</button>
                            <button onClick={onDelete}>Delete</button>
                        </div>                     
                    )) }  
                </div>
                
            </>            
        </div>
  )
}

export default Article