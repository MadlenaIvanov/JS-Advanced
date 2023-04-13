import {renderTemplate} from './engine.js';

async function start() {
    const articles = await(await fetch('./articles.json')).json();
    const articleTemplate = await(await fetch('./article.html')).text();

    //articles.map(createArticle);
    renderTemplate(articleTemplate, articles[0]);

    const main = document.getElementById('content');
    main.innerHTML = articles.map(article => renderTemplate(articleTemplate, article)).join('');

    //console.log(articles);
}

start();