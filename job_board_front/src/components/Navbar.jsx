import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Navbar.css";
import AuthAPI from "../Requests/authAPI.js";

export const Navbar = ({isAuthenticated, onLogout}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function handlelogout() {
      AuthAPI.logout();
      onLogout(false);
  }
  return  (
     
    <nav >
        <Link to='/' className='title'>JOB BOARD</Link>
        <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        
        </div>
        <ul  className={menuOpen ? "open" : ""}>
            <li><NavLink to='/'>Home</NavLink> </li>
            <li><NavLink to='/find'>Offers</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {!isAuthenticated && (<>
                <li><NavLink to='/login'>login</NavLink></li>
                <li><NavLink to='/signup'>Signup</NavLink></li>
            </>) || <><li><button type="button" onClick={handlelogout}>Logout</button></li>
                <li><NavLink to='/profile'>Profile</NavLink></li>
                <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </>}

        </ul>
    </nav>
    
  );
  
};

