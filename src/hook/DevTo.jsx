import React , { useEffect, useState } from 'react';
import axios from 'axios';

function DevTo(){

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

    return articles
           
};

export default DevTo;