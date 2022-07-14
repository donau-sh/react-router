import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1>React Router Tutorial</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </>
  )
}

export default Header
