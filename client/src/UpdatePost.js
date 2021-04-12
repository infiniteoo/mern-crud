import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { getToken } from './helpers';

const UpdatePost = (props) => {
  const [post, setPost] = useState("");
  const [state, setState] = useState({
    title: "",
   
    slug: "",
    user: "",
  });

  const { title, slug, user } = state;
  const [content, setContent] = useState('');

  const handleContent = (event) => {
    console.log(event);
    setContent(event);

}

  const handleChange = (name) => (event) => {
    console.log('name', name, 'event', event.target.value)
    setState({...state, [name]: event.target.value})

  }

  const handleSubmit = event => {
      event.preventDefault();
      axios.put(`${process.env.REACT_APP_API}/post/${slug}`, { title, content, user },{
        headers: {
            authorization: `Bearer ${getToken()}`
        }
    })
      .then(response => {
          //empty state
          console.log(response)
          const {title, content, slug, user} = response.data
          setState({...state, title, content, user, slug})
          //show success alert
          alert(`Post titled ${title} is updated.`)



      })
      .catch(error => {
          console.log(error.response)
          alert(error.response.data.error)
      })

  }

  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then((response) => {
        const { title, content, slug, user } = response.data;
        setState({ ...state, title, slug, user });
        setContent(content);
      })
      .catch((error) => alert("Error loading single post"));
  }, []);

  const showUpdateForm = () => (
    
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
        <label className='text-muted'>Title</label>
        <input onChange={handleChange('title')} value={title} type='text' className='form-control' placeholder="Post Title" required></input>
    </div>
    <div className='form-group'>
        <label className='text-muted'>Content</label>
        <ReactQuill 
             onChange={handleContent} value={content} theme="bubble" className='pb-5 mb-3' placeholder="Write something" style={{border: '1px solid #666'}}
               
             />

        
    </div>
    <div className='form-group'>
        <label className='text-muted'>User</label>
        <input onChange={handleChange('user')} value={user} type='text' className='form-control' placeholder="Your Name" required></input>
    </div>
    <div>
        <button className='btn btn-primary m-2'>Update</button>
    </div>

 </form>
    
  );

  return (
    <div className="container pb-5">
      <Nav />
      <br />
      <h1>UPDATE POST</h1>

      {showUpdateForm()}
    </div>
  );
};

export default UpdatePost;
