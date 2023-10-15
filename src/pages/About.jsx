import React from 'react';
import styled from "styled-components";
import aboutImg from '../assets/images/about.jpg';
import { inject } from '@vercel/analytics';

function About(){
    inject();
    return (  
        <MainAbout>
              <DivImageAbout>
                <DivImageAboutImg src={aboutImg} alt="About Image" />
              </DivImageAbout>
              <div>
                  <P>Very focused professional and very easy to work in a team.</P>
                  <P><strong>I always look for innovation</strong>. On my journey I was part of MV Sistemas.</P>
                  <P>Learning the business rules of the Hospital area (mainly the Supplies area).</P>
                  <P>I was also part of the technology area at Accenture focused on financial services, today I am part of China Systems.</P>
              </div>
        </MainAbout>
    )
}

const MainAbout = styled.main`
  margin: 0em 1em 5em 1em;
  font-size: 1em;
  text-align: left;
  background: linear-gradient(135deg, var(--current-line) 0%, var(--background) 50%, var(--current-line) 90%);
  border-radius: 70px;
  padding: 2em;

  @media screen and (min-width: 900px) {
    margin: 0em 10em 5em 10em;
    display: flex;
    text-align: left;
    align-items: center;
  }
`;

const P = styled.p`
  color: var(--color-primary);
`;

const DivImageAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DivImageAboutImg = styled.img`
  width: 100%;
  border-radius: 20px;
  opacity: 0.7;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export default About;