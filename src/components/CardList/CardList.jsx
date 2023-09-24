import React from 'react';
import './CardList.css'

function CardList(props){
    return <a target="_blank" href={props.article.url}>
                <li class="cardList" key={props.article.id}>
                    <img src={props.article.cover_image} alt="" />
                    <strong>{props.article.title}</strong>
                    <p>{props.article.description}</p>
                </li>
            </a>
};

export default CardList;