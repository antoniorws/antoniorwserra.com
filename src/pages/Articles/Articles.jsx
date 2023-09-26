import React , { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';
import './Articles.css'

function Articles(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://dev.to/api/articles?username=antoniorws';
        axios.get(apiUrl)
        .then(response => {
            setArticles(response.data);
        })
        .catch(error => {
            console.error('Error to get articles: ', error);
        });
    }, []);

    return <ul class="articles">
                {articles.map(article => (
                    <CardList article = {article}/>
                ))}
            </ul>
           
};

export default Articles;