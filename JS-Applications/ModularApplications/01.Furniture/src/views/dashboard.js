import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFurniture } from '../api/data.js';
import { until } from '../../node_modules/lit-html/directives/until.js';

const dashboardTemplate = (data, search, onSearch) => html `
<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
        <div style="float:right">
            <input id="searchInput" name="search" type="text" .value=${search}>
            <button @click=${onSearch}>Search</button>
        </div>
    </div>
</div>
<div class="row space-top">
    ${data.map(itemTemplate)}           
</div>`;

const itemTemplate = (item) => html `
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${item.img} />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>`;

const loaderTemplate = html`<p>Loading&hellip;</p>`;

export async function dashboardPage(ctx) {
    const searchParams = ctx.querystring.split('=')[1] || '';
    //console.log('dashboard page');
    const data = await getFurniture(searchParams);

    ctx.render(until(populateTemplate(), loaderTemplate));

    function onSearch(event) {
        const search = encodeURIComponent(document.getElementById('searchInput').value);
        ctx.page.redirect('/?search=' + search);
        //console.log(search)

    }

    async function populateTemplate() {
        const data = await getFurniture(searchParams);
        return dashboardTemplate(data, searchParams, onSearch);
    }
}