import React from 'react';
import {Link} from 'react-router-dom';
import './MenuTop.scss';
import logo from './utv_logo.png';

const MenuTop = () => {

    return (
        <div className='navBar'>
            <div className='container'>
                <div className='logo-wrapper'>
                    <img id='utv_logo' alt='UTV_logo' src={logo}/>
                </div>
                <nav className='navigation-wrapper'>
                    <div className="navigation">
                        <Link to='/'> Home </Link>
                        <div className="navigation-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>
                    </div>
                    <div className="navigation">
                        <Link to='/porady'> Pořady </Link>
                        <div className="navigation-content">
                            <a href="/">Link 1</a>
                            <a href="/">Link 2</a>
                            <a href="/">Link 3</a>
                        </div>
                    </div>
                    <div className="navigation">
                        <Link to='naladit'> Jak naladit </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default MenuTop;