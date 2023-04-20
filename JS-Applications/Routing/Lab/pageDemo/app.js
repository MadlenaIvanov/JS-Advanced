import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog</h2><p>List of acticles</p>',
    '/catalog/123': '<h2>Item 123</h2><p>Item details</p>',
    '/about': '<h2>About Us</h2><p>Contact information</p>'
};

const defaultPage = '<h2>404</h2><p>Page Not Found</p>';

const main = document.querySelector('main');

page('/home', () => updateContent('/home'));
page('/catalog', () => updateContent('/catalog'));
page('/catalog/123', () => updateContent('/catalog/123'));
page('/about', () => updateContent('/about'));
page.start();


function updateContent(pathname) {
    main.innerHTML = pages[pathname] || defaultPage;
}