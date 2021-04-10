import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Nav = () => {
    return (
        <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item pr-3 pt-3 pb-3">
                <Link to="/" style={{textDecoration: "none"}}>Home</Link>    
              </li>  
              <li className="nav-item pr-3 pt-3 pb-3" >
                <Link to="/create" style={{textDecoration: "none"}}>Create</Link>    
              </li>  
            </ul>
        </nav>
    )
}

export default Nav;
