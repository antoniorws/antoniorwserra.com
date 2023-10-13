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
                  <p>Very focused professional and very easy to work in a team.</p>
                  <p>I always look for innovation. On my journey I was part of MV Sistemas.</p>
                  <p>Learning the business rules of the Hospital area (mainly the Supplies area).</p>
                  <p>I was also part of the technology area at Accenture focused on financial services, today I am part of China Systems.</p>
              </div>
        </MainAbout>
    )
}

const MainAbout = styled.main`
  margin: 0em 0em 5em 0em;
  font-size: 1em;
  text-align: justify;
  background: linear-gradient(135deg, #1d1d1d 0%, #000000 20%);
  border-radius: 70px;
  padding: 2em;

  @media screen and (min-width: 700px) {
    margin: 0em 5em 5em 5em;
    display: flex;
    text-align: justify;
    align-items: center;
  }
`;

const DivImageAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DivImageAboutImg = styled.img`
  width: 80%;
  border-radius: 70px;

  @media screen and (min-width: 700px) {
    width: 50%;
    border-radius: 70px;
  }
`;

export default About;