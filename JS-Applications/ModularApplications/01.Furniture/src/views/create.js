import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord} from "../api/data.js";
import { notify, clear } from '../notification.js';

const createTemplate = (onSubmit, errorMsg) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
        ${errorMsg ? html`<p style="color: red">${errorMsg}</p>` : ''}
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;


export async function createPage(ctx) {
    //console.log('create page');

    ctx.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = ([...formData.entries()].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {}))

        if(Object.entries(data).filter(([k,v]) => k != 'material').some(([k,v]) => v == '')) {
            //return notify('Please fill all mandatory fields') 
            return ctx.render(createTemplate(onSubmit, 'Please fill all fields')) 
        }
        data.year = Number(data.year);
        data.price = Number(data.price);

        await createRecord(data);
        clear();
        ctx.page.redirect('/');
    }
}