import React from 'react'
import { Link } from 'react-router-dom';



function Article({ articles, onDelete }) {

    const setData = (title, body) => {
        localStorage.setItem('title', title)
        localStorage.setItem('body', body)
    }
        
    
    return (      
        <div>            
            <>                
                <h2>Articles</h2>
                <div className='article_card_container'>
                    { articles.map((article) => (
                        <div className='article_card' key={article.id}>
                            <h3>{ article.title }</h3> 
                            <p>{ article.body }</p>
                            <Link to = '/update'>
                                <button color='blue' onClick={()=>setData(article.title, article.body) } className="btn-login" style={{color: "white"}}>Update</button>
                            </Link>   
                            <button onClick={()=> onDelete(article.id)} className="btn-login" style={{marginLeft: "2px", color: "white", backgroundColor: "red" }}>Delete</button>
                        </div>                     
                    )) }  
                </div>
                
            </>            
        </div>
  )
}

export default Article