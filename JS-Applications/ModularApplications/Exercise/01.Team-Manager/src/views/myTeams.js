import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyTeams } from '../api/data.js';


const myTeamsTemplate = (teams) => html`            
<section id="my-teams">

<article class="pad-med">
    <h1>My Teams</h1>
</article>

<article class="layout narrow">
    ${teams.length == 0 ? html`
    <div class="pad-med">
        <p>You are not a member of any team yet.</p>
        <p><a href="/browse">Browse all teams</a> to join one, or use the button bellow to cerate your own
            team.</p>
    </div>` : ''}
    <div class=""><a href="/create" class="action cta">Create Team</a></div>
</article>

${teams.map(teamTemplate)}

</section>`;

const teamTemplate = (team) => html`
<article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.memberCount} Members</span>
        <div><a href=${`/details/${team._id}`} class="action">See details</a></div>
    </div>
</article>`;

export async function myTeamsPage(ctx) {
    const teams = await getMyTeams();
    ctx.render(myTeamsTemplate(teams));
}