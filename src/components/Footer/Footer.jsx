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
                    <li><a target='_blank' href="https://github.com/antoniorws"><img src={gitHubImage} /></a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/antonio-rodrigo-wanderley-serra/"><img src={linkedInImage} /></a></li>
                    <li><a target='_blank' href="https://www.instagram.com/antoniowserra/"><img src={instagramImage} /></a> </li>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;