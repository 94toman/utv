import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.scss';
import logo from './utv_logo.png';

const NavBar = () => {

    return (
        <nav className='navBar'>
            <div className='container'>
                <div className='navBar-logo-wrapper'>
                    <NavLink to='/'>
                        <img id='utv_logo' alt='UTV_logo' src={logo}/>
                    </NavLink>
                </div>
                <div className='navMenu'>
                    <NavLink 
                        to='/' 
                        className="navigation" 
                        > Home 
                    </NavLink>
                    <NavLink 
                        to='/porady' 
                        className="navigation" 
                        > Pořady 
                    </NavLink>
                    <NavLink 
                        to='naladit' 
                        className="navigation" 
                        > Jak nás naladit 
                    </NavLink>
                    <NavLink 
                        to='kontakt' 
                        className="navigation" 
                        > Kontakt
                    </NavLink>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;


/*
                        <div className="navigation-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>

    .navigation-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        border-radius: 4px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
  }
  .navigation:hover .navigation-content {
    display: block;
  }





*/