import React , { useEffect, useState } from 'react';
import axios from 'axios';
import './Articles.css'

function Articles(){

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://dev.to/api/articles?username=antoniorws';

        axios.get(apiUrl)
        .then(response => {
            // Armazene todos os objetos de artigo
            const articleData = response.data;

            // Atualize o estado com os dados dos artigos
            setArticles(articleData);
        })
        .catch(error => {
            console.error('Erro ao buscar artigos:', error);
        });
    }, []);

    return <div class="articles">
        <main>
         {articles.map(article => (
            <div class="article" key={article.id}>
                <h6>{article.title}</h6>
                <img src={article.cover_image} alt="" />
                <p>{article.description}</p>
            </div>
        ))}
        </main>
    </div>
};

export default Articles;