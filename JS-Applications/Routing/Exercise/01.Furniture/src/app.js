import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { myPage } from './views/myfurniture.js';

import * as api from './api/data.js';

window.api = api;
const main = document.querySelector('.container');

page('/', renderMiddleWare, dashboardPage);
page('/dashboard', renderMiddleWare, dashboardPage);
page('/details/:id', renderMiddleWare, detailsPage);
page('/create', renderMiddleWare, createPage);
page('/edit/:id', renderMiddleWare, editPage);
page('/register', renderMiddleWare, registerPage);
page('/login', renderMiddleWare, loginPage);
page('/my-furniture', renderMiddleWare, myPage);

page.start();

function renderMiddleWare(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();

}