import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Update() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(null);

  console.log(title);
  console.log(body);

  const sendDataToApi = (e) => {
    // e.preventDefault()
    console.log(id)
    axios.put(`/articles/${id}`, {
      title,
      body
    }).then(() => NavigationPreloadManager.push('./'));
    setTitle('');
    setBody('');    
  }

  useEffect(() => {
    setTitle(localStorage.getItem('title'));
    setBody(localStorage.getItem('body'));
    setId(localStorage.getItem('id'))
  }, []);

    return (
      <div className="postSection" style={ { "width": "71%", marginTop: "20px", marginLeft: "15%" }}>
        <form  className="post_form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            autoComplete="off"
            value={ title }
            name ="title"
            onChange={ (e) => setTitle(e.target.value) }
          />
        
          <label htmlFor="body">Body</label>
          <textarea
            type="body"
            id="body"
            autoComplete="off"
            value={ body }
            name="body"
            onChange={ (e) => setBody(e.target.value) }
          />
          <Link to = '/'>
            <button type="submit" className="btn-login" onClick={ sendDataToApi }>Update</button>
          </Link>          
        </form>
      </div>
    );
  }

export default Update