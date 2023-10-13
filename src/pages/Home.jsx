import React from 'react';
import styled from 'styled-components';
import Typed from "react-typed";
import { inject } from '@vercel/analytics';

function Home(){
    inject();
    console.log("Hi Dev :D");
    return (<Main>
                <H1>Antonio Serra</H1>
                <strong>
                    <DivSoftwareDeveloper>
                        <Typed
                            strings={[
                            "Software Developer",
                            ]}
                            typeSpeed={150}
                        />
                    </DivSoftwareDeveloper>
                </strong>
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
    background-image: linear-gradient(135deg, rgb(133, 51, 153) 0%, rgb(35, 68, 95) 50%, rgba(64, 224, 208, 0.208) 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    opacity: 0.7;
    font-size: 110%;
`;


export default Home;