import * as api from './api.js';

const host = 'http://localhost:3030';
api.settings.host = host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

export async function getTeams() {
    const teams = await api.get(host + '/data/teams');
    const members = await getMembers(teams.map(t => t._id));
    teams.forEach(t => {
        t.memberCount = members.filter(m => m.teamId == t._id).length});
    return teams;
}

export async function getMyTeams() {
    const userId = sessionStorage.getItem('userId');
    const teamsCreated = await api.get(host + `/data/teams?where=_ownerId%3D%22${userId}%22`);
    const teamMember = await api.get(host + `/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
    
    const teams = teamsCreated.concat(teamMember.map(r => r.team));

    const members = await getMembers(teams.map(t => t._id));
    teams.forEach(t => {t.memberCount = members.filter(m => m.teamId == t._id).length});
    return teams;
}

export async function getTeamsById(id) {
    return await api.get(host + '/data/teams/' + id);
}

export async function createTeam(team) {
    const result = await api.post(host + '/data/teams', team);
    const request = await requestToJoin(result._id);
    await approveMembership(request);
    return result;
}


export async function editTeam(id, team) {
    return await api.put(host + '/data/teams/' + id, team);
}

export async function deleteTeam(id) {
    return await api.del(host + '/data/teams/' + id);
}

export async function requestToJoin(teamId) {
    const body = { teamId };
    return await api.post(host + '/data/members', body);
}

export async function getRequestsByTeamId(teamId) {
    return await api.get(host + `/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
}

export async function getMembers(teamIds) {
    const query = encodeURIComponent(`teamId IN ("${teamIds.join('", "')}") AND status="member"`);
    return await api.get(host + `/data/members?where=${query}`);
}

export async function cancelMembership(requestId) {
    return await api.del(host + '/data/members/' + requestId);
}

export async function approveMembership(request) {
    const body = {
        teamId: request.teamId,
        status: 'member'
    };

    return await api.put(host + '/data/members/' + request._id, body)
}