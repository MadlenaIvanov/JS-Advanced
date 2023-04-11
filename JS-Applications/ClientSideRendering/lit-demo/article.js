const createArticle = (article) => `
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
</article>
`;

export default createArticle;