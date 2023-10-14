import React from 'react';
import styled from 'styled-components';
import Typed from "react-typed";
import { inject } from '@vercel/analytics';

function Home(){
    inject();
    console.log("Hi Dev :D");
    return (<Main>
                <H1>Antonio Serra</H1>
                    <DivSoftwareDeveloper>
                        <Typed
                            strings={[
                            "Software Developer",
                            ]}
                            typeSpeed={150}
                        />
                    </DivSoftwareDeveloper>
            </Main>
    )
}

const Main = styled.main`
    margin-top: 3em;
    font-size: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const H1 = styled.h1`
    margin-bottom: 1%;
    animation: showName;
    animation-duration: 2s;
    opacity: 0.7;
    font-size: 110%;
    color: var(--color-primary);
    @keyframes showName {
        from {
          opacity: 0;
        }
        to {
        }
      }
`;

const DivSoftwareDeveloper = styled.div`
    border-radius: 50px;
    background-image: linear-gradient(135deg, var(--orange) 0%, var(--purple) 60%, var(--pink) 80%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.7;
    font-size: 110%;
    font-weight: bold;
    margin: 0 30%;
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`;


export default Home;