import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
  render(){
    return (
      <nav className="navigation">
        <Link to="/" className="nav-brand">Workout-Scheduler</Link>
        <div className="nav-colapse">
          <ul className="navbar">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Exercises</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="navbar-link">Create Exercise Log</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="navbar-link">Create User</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
