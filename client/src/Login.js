import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Login = () => {

    const [state, setState] = useState({
        name: '',
        password: ''
    })

    const { name, password } = state;  // destructure values from state

    const handleChange = (name) => (event) => {
        console.log('name', name, 'event', event.target.value)
        setState({...state, [name]: event.target.value})
    
      }
    
      const handleSubmit = event => {
          event.preventDefault();
          console.table({name, password});
          /* axios.post(`${process.env.REACT_APP_API}/post`, { title, content, user })
          .then(response => {
              //empty state
              console.log(response)
              setState({...state, title: '', content:'', user: ''})
              //show success alert
              alert(`Post titled ${response.data.title} is created.`)
    
    
          })
          .catch(error => {
              console.log(error.response)
              alert(error.response.data.error)
          }) */
    
      }

    return (
        <div className='container pb-5'>
            <Nav/>
            <br/>
            <h1>LOGIN</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
         <div className='form-group'>
             <label className='text-muted'>User</label>
             <input onChange={handleChange('name')} value={name} type='text' className='form-control' placeholder="Your Name" required></input>
         </div>
         
         <div className='form-group'>
             <label className='text-muted'>Password</label>
             <input onChange={handleChange('password')} value={password} type='password' className='form-control' placeholder="Your Password" required></input>
         </div>
         <div>
             <button className='btn btn-primary m-2'>Submit</button>
         </div>

      </form>
            
        </div>
    )
}

export default Login