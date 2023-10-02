import React from 'react';
import './Footer.css';
import gitHubImage from '../../github.png';
import linkedInImage from '../../linkedin.png';
import instagramImage from '../../instagram.png';

function Footer(){
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href=""><img src={gitHubImage} /></a></li>
                    <li><a href=""><img src={linkedInImage} /></a></li>
                    <li><a href=""><img src={instagramImage} /></a> </li>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;