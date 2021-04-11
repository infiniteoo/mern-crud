import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.css'
import {logout, getUser} from './helpers';




const Nav = ({ history }) => (
  <nav>
      <ul className="nav nav-tabs">
          <li className="nav-item pr-3 pt-3 pb-3">
              <Link to="/">Home</Link>
          </li>
          <li className="nav-item pr-3 pt-3 pb-3">
              <Link to="/create">Create</Link>
          </li>

          {!getUser() && (
              <li className="nav-item ml-auto pr-3 pt-3 pb-3">
                  <Link to="/login">Login</Link>
              </li>
          )}

          {getUser() && (
              <li
                  onClick={() => logout(() => history.push('/'))}
                  className="nav-item ml-auto pr-3 pt-3 pb-3"
                  style={{ cursor: 'pointer', float: 'right' }}
              >
                  Logout
              </li>
          )}
      </ul>
  </nav>
);

export default withRouter(Nav);
