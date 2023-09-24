import React from 'react';
import './OtherList.css'

function CardList(props){
    return <a target="_blank" href={props.article.url}>
                <li class="otherList" key={props.article.id}>
                    <strong>{props.article.title}</strong>
                    <p>{props.article.description}</p>
                </li>
            </a>
};

export default CardList;