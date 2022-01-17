'use strict';

const server_url = 'http://localhost:3000';
// const server_url = 'https://snow-trekking-forum.herokuapp.com';   // для heroku
const api_url = `${server_url}/api`;

// адреса для обращения к апи сервера и соцсетей
module.exports = {
	serverUrl: `${server_url}`,

	usersApi: `${api_url}/users`,
	groupsApi: `${api_url}/groups`,
	usersByGroupsApi: `${api_url}/users-by-groups`,

}