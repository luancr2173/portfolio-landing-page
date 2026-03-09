import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import appLogo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className='logo' src={appLogo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
