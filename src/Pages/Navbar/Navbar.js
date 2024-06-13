import React, { useState } from 'react';
import './Navbar.css';
 import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" className='logo-img' />
        <span className='logo-text'>BloodFinder</span>
      </div>
      <ul className={`nav-menu ${isActive ? 'active' : ''}`}>
        <li className='nav-item'>
          <Link to="/" onClick={() => setIsActive(false)}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/about" onClick={() => setIsActive(false)}>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/Tips" onClick={() => setIsActive(false)}>
            Guidelines
          </Link>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;