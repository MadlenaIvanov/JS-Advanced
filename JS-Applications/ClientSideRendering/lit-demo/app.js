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
    const [articleData] = await (await fetch('./articles.json')).json();
    articleData.counter = 0;
    const main = document.getElementById('content');
    const main2 = document.getElementById('content2');

    document.getElementById('btn').addEventListener('click', onClick);

    function onClick() {
        articleData.counter++;
        const article = articleTemplate(articleData);
        const article2 = createArticle(articleData);

        render(article,main);
        main2.innerHTML = article2;
    }



}

start();