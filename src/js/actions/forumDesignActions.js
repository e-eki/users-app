'use strict';

import * as actionTypes from './actionTypes';

// цветовая тема оформления (день/ночь)
export function setColorTheme(data) {
	return {
	  type: actionTypes.SET_COLOR_THEME,
	  data
	};
}

// тип отображения списка пользователей (таблица/карточка/плитка)
export function setViewType(data) {
	return {
	  type: actionTypes.SET_VIEW_TYPE,
	  data
	};
}
