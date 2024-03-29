import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog</h2><p>List of acticles</p>',
    '/catalog/123': '<h2>Item 123</h2><p>Item details</p>',
    '/about': '<h2>About Us</h2><p>Contact information</p>'
};

const defaultPage = '<h2>404</h2><p>Page Not Found</p>';

const main = document.querySelector('main');

page('/home', updateContent);
page('/catalog', updateContent);
page('/catalog/:id', itemDetails);
page('/about', updateContent);
page.start();


function updateContent(context) {
    main.innerHTML = pages[context.pathname] || defaultPage;
}<

function itemDetails(context) {
    const id = context.params.id;
    const html = `<h2>Item ${id}</h2><p>Details for item ${id}</p>`;
    main.innerHTML = html;
}