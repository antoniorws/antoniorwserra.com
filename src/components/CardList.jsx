import React from 'react';
import styled from 'styled-components';

function CardList(props){
    return  <main>
                <a target="_blank" rel="noreferrer" href={props.article.url}>
                    <Li key={props.article.id}>
                        <ImageLi src={props.article.cover_image} alt="" />
                        <LiStrong>{props.article.title}</LiStrong>
                        <PCard>{props.article.description}</PCard>
                    </Li>
                </a>
            </main>
};

const Li = styled.li`
    width: 350px;
    height: auto;
    border-radius: 10px;
    list-style: none;
    margin: 20px 16px;
    animation: showItens;
    animation-duration: 1s;
    border: 0.5px solid black;
    opacity: 0.8;
    @media screen and (min-width: 600px) {
        &:hover{
            border: rgba(183, 183, 183, 0.488) 0.5px solid;
            transition-duration: 0.3s;
            opacity: 1;
        }
    }
`;

const LiStrong = styled.strong`
    color: rgb(183, 183, 183);
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0px 12px;
`;

const ImageLi = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const PCard = styled.p`
    text-align: center;
    opacity: 0.8;
    color: rgb(183, 183, 183);
`;


export default CardList;