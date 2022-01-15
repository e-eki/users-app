'use strict';

import * as actionTypes from './actionTypes';

// список пользователей
export function setUsers(data) {
	return {
	  type: actionTypes.SET_USERS,
	  data
	};
}
