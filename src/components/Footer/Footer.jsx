import React from 'react';
import './Footer.css';
import gitHubImage from '../../assets/images/github.png';
import linkedInImage from '../../assets/images/linkedin.png';
import instagramImage from '../../assets/images/instagram.png';

function Footer(){
    return (
        <footer>
            <nav>
                <ul>
                    <li><a target='_blank' rel='noreferrer' href="https://github.com/antoniorws"><img alt='GitHub' src={gitHubImage} /></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/antonio-rodrigo-wanderley-serra/"><img alt='LinkedIn' src={linkedInImage} /></a></li>
                    <li><a target='_blank' rel='noreferrer' href="https://www.instagram.com/antoniowserra/"><img alt='Instagram' src={instagramImage} /></a> </li>
                </ul>
                <p>Antonio Serra • © 2023</p>
            </nav>
        </footer>
    )
};

export default Footer;