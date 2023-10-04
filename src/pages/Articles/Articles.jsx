import React from 'react';
import CardList from '../../components/CardList/CardList';
import './Articles.css'
import DevTo from '../../services/DevTo';

function Articles(){

    const articlesDevTo = DevTo();

    return <ul class="articles">
                {articlesDevTo.map(article => (
                    <CardList article = {article}/>
                ))}
            </ul>         
};

export default Articles;