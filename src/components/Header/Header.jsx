import React from 'react';
import './Header.css';

function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="./index">Home</a></li>
                    <li><a href="./about">About</a></li>
                    <li><a href="./articles">Articles</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;