import React from 'react';
import CardList from '../components/CardList';
import DevTo from '../services/DevTo';
import { inject } from '@vercel/analytics';
import styled from 'styled-components';
import { SpeedInsights } from "@vercel/speed-insights/react";

function Articles(){
    inject();
    const articlesDevTo = DevTo();

    return <Main>
                <Ul>
                    <SpeedInsights />
                    {articlesDevTo.map(article => (
                        <CardList article = {article}/>
                    ))}
                </Ul>         
            </Main>
           
};

const Main = styled.main`
    margin-top: 3em;
`;

const Ul = styled.ul`
    height: 100%;
    flex-wrap: wrap;
    place-content: center;
    width: 80vw;
    gap: 16px;
    -webkit-box-pack: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: inline-flex;
    position: relative;
    top: 5px;
    justify-content: space-around;
    border-radius: 30px;
`;

export default Articles;