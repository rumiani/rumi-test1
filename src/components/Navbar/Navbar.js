import { useState } from 'react';
import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
const [click, setClick] = useState(false);

const handleClick = ()=>setClick(!click)

const closeMobileMenu = ()=>setClick(false)


    return ( 
            <nav className="navbar">
                <div className="navbar-container" >
                    <Link to="/" className="navbar-logo"  onClick={closeMobileMenu}>
                        Rumiani &nbsp;<i className="fas fa-laptop-code"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click?'fas fa-times':'fas fa-bars'}></i>
                    </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href='#footer' className='nav-links' onClick={closeMobileMenu} >
                                Contact Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu} >
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/assets/resume.pdf' target='_blank' className='nav-links' onClick={closeMobileMenu} >
                            Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default Navbar;
