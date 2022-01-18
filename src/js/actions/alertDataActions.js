'use strict';

import * as actionTypes from './actionTypes';

// данные для окна с оповещением для юзера
export function setAlertData(data) {
	return {
	  type: actionTypes.SET_ALERT_DATA,
	  data
	};
}
