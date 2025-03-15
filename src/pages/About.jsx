import React from 'react';
import styled from "styled-components";
import Typed from "react-typed";
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
                  <P><Inovation><Typed
                            strings={[
                            "I always look for innovation.",
                            ]}
                            typeSpeed={50}
                        /></Inovation> 
                  </P>
              </div>
        </MainAbout>
    )
}

const Inovation = styled.div`
background-image: linear-gradient(135deg, var(--purple) 0%, var(--pink) 70%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-weight: bold;
`;

const MainAbout = styled.main`
  margin: 0em 1em 5em 1em;
  font-size: 1.2em;
  text-align: left;
  background: var(--current-line);
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
  opacity:  1;
  transition: 250ms;
  &:hover{
    opacity: 1;
    transition: 250ms;
  }
  @media screen and (min-width: 700px) {
    width: 50%;
  }
`;

export default About;