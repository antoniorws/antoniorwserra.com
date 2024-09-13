import React from 'react';
import styled from 'styled-components';
import gitHubImage from '../assets/images/github.png';
import linkedInImage from '../assets/images/linkedin.png';
import instagramImage from '../assets/images/instagram.png';
import { SpeedInsights } from "@vercel/speed-insights/react";

function Footer(){
    return (
        <FooterComponent>
            <SocialMediaNav>
                <SocialMediaList>
                    <SocialMediaItem><SpeedInsights /><SocialMediaLink target='_blank' rel='noreferrer' href="https://github.com/antoniorws"><SocialMediaIcon alt='GitHub' src={gitHubImage} /></SocialMediaLink></SocialMediaItem>
                    <SocialMediaItem><SpeedInsights /><SocialMediaLink target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/antonio-rodrigo-wanderley-serra/"><SocialMediaIcon alt='LinkedIn' src={linkedInImage} /></SocialMediaLink></SocialMediaItem>
                    <SocialMediaItem><SpeedInsights /><SocialMediaLink target='_blank' rel='noreferrer' href="https://www.instagram.com/antoniowserra/"><SocialMediaIcon alt='Instagram' src={instagramImage} /></SocialMediaLink> </SocialMediaItem>
                </SocialMediaList>
                <P>Antonio Serra • © 2024</P>
            </SocialMediaNav>
        </FooterComponent>
    )
};

const FooterComponent = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: block;
`;

const P = styled.p`
    font-size: smaller;
    margin: 0 0 10px 0;
    color: var(--gray);
`;

const SocialMediaNav = styled.nav`
    text-align: center;
`;

const SocialMediaList = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: inline-flex;
    position: relative;
    justify-content: space-around;
    border-radius: 30px;
`;

const SocialMediaItem = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 1em;
    opacity: 0.5;

    @media screen and (min-width: 600px) {
        &:hover {
            transition-duration: 0.3s;
            opacity: 1;
         }
    }
`;

const SocialMediaLink = styled.a`
    position: relative;
`;

const SocialMediaIcon = styled.img`
    width: 35px;
    height: auto;
    opacity: 0.8;
`;

export default Footer;