import React from 'react';
import './MenuTop.css'

const MenuTop = () => {

    return (
        <div className='navBar'>
            <div className="navigation">
                <a href="/">Menu 1</a>
                <div class="navigation-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="navigation">
                <a href="/">Menu 2</a>
                <div class="navigation-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                </div>
            </div>
            <div className="navigation">
                <a href="/">Single Menu</a>
            </div>
        </div>
    )
};

export default MenuTop;