import React, { useState } from 'react'

function NewArticle({article}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/article", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((article) => console.log(article));
          }
        });
      }
    
  return (
    <div className="postSection">
      <form onSubmit={handleSubmit} className="post_form">
        <h1>Post</h1>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <label htmlFor="body">Body</label>
        <textarea
          type="body"
          id="body"
          autoComplete="off"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className="btn-login" >Publish</button>
      </form>
    </div>
  )
}

export default NewArticle