import React from 'react';
import styled from 'styled-components';

function CardList(props){
    return  <A target="_blank" rel="noreferrer" href={props.article.url}>
                <Li key={props.article.id}>
                    <ImageLi src={props.article.cover_image} alt="" />
                    <LiStrong>{props.article.title}</LiStrong>
                    <PCard>{props.article.description}</PCard>
                </Li>
            </A>
};

const A = styled.a`
    text-decoration: none;
`;

const Li = styled.li`
    width: 350px;
    height: auto;
    border-radius: 10px;
    list-style: none;
    margin: 20px 16px;
    animation: 1s showItens;
    opacity: 0.8;
    @media screen and (min-width: 600px) {
        &:hover{
            transition-duration: 0.3s;
            opacity: 1;
        }
    }
    @keyframes showItens {
        from {
            opacity: 0;
        }
    }
`;

const LiStrong = styled.strong`
    color: var(--color-primary);
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0px 12px;
`;

const ImageLi = styled.img`
    width: 100%;
    border-radius: 10px;
    &:hover{
        transition: 0.2s;
        transform-origin: center center;
        transform: scale(1.03) rotate(0.5deg);
        
    }
`;

const PCard = styled.p`
    text-align: center;
    opacity: 0.8;
    color: var(--color-primary);
`;


export default CardList;