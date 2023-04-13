import { html, render } from 'https://unpkg.com/lit-html?module';
import createArticle from './article.js';

const articleTemplate = (article) => html`
<article>
    <header>
        <h3>${article.title}</h3>
        <h4>Clicked:${article.counter}</h4>
    </header>
    <div class="article-content">
        <p>
            ${article.content}
        </p>
    </div>
    <footer>Author: ${article.author}</footer>
</article>`;



async function start() {
    const articles = await (await fetch('./articles.json')).json();
    const main = document.getElementById('content');

    document.getElementById('btn').addEventListener('click', onClick);

    function onClick() {
        const result = articles.map(articleTemplate);

        render(result,main);
    }



}

start();