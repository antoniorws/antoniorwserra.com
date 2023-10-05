import React from 'react';
import './Header.css';

function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <a href="./"><li>Home</li></a>
                    <a href="./about"><li>About</li></a>
                    <a href="./articles"><li>Articles</li></a>
                </ul>
            </nav>
        </header>
    )
};

export default Header;