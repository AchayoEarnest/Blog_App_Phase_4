import React from 'react'



function Article({ articles, onDelete }) {

    
    
    return (      
        <div>
            
            <>             
                
                <h2>Articles</h2>
                <div>
                    { articles.map((article) => (
                        <div className='article_card' key={article.id}>
                            <h3>{ article.title }</h3> 
                            <p>{ article.body }</p>
                            <button>Comment</button>
                            <button>Edit</button>
                            <button onClick={()=> onDelete(article.id)}>Delete</button>
                        </div>                     
                    )) }  
                </div>
                
            </>            
        </div>
  )
}

export default Article