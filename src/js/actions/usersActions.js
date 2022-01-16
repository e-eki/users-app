'use strict';

import * as actionTypes from './actionTypes';

// список пользователей
export function setUsers(data) {
	return {
	  type: actionTypes.SET_USERS,
	  data
	};
}

// список пользователей по группам
export function setUsersByGroups(data) {
	return {
	  type: actionTypes.SET_USERS_BY_GROUPS,
	  data
	};
}

