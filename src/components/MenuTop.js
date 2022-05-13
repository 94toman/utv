import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './MenuTop.scss'

const MenuTop = () => {

    return (
        <nav className='navBar'>
            <div className="navigation">
                <Link to='/'> Home </Link>
                <div class="navigation-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="navigation">
                <Link to='/porady'> Pořady </Link>
                <div class="navigation-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="navigation">
                <Link to='naladit'> Jak naladit </Link>
            </div>
        </nav>
    )
};

export default MenuTop;