import { html, render } from './node_modules/lit-html/lit-html.js';

const listTemplate = (data) => html `
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(event) {
    event.preventDefault();

    const townsAsString = document.getElementById('towns').value;
    const root = document.getElementById('root');

    const towns = townsAsString.split(', ').map(x => x.trim());

    const result = listTemplate(towns);

    render(result, root);

}