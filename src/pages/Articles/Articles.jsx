import React , { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from '../../components/CardList/CardList';
import OtherList from '../../components/OtherList/OtherList';
import './Articles.css'

function Articles(){

    const [articles, setArticles] = useState([]);
    const [articlesOther, setArticlesOther] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://dev.to/api/articles?username=antoniorws';

        axios.get(apiUrl)
        .then(response => {
            const articleData = response.data;
            const threeArticles = [];
            const moreArticles = [];
            let count = 0;
            for (count; count < articleData.length; count++) {
                if(count < 3){
                    threeArticles.push(articleData[count]);
                }else{
                    moreArticles.push(articleData[count]);
                }
            }
            setArticles(threeArticles);
            setArticlesOther(moreArticles);
        })
        .catch(error => {
            console.error('Error to get articles: ', error);
        });
    }, []);

    return <div>
                <ul class="articles">
                    {articles.map(article => (
                        <CardList article = {article}/>
                    ))}
                </ul>
                <ul class="articlesListItem">
                    {articlesOther.map(article => (
                    <OtherList article = {article}/>
                ))}
                </ul>
            </div>
};

export default Articles;