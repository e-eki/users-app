'use strict';

import * as actionTypes from './actionTypes';

// текст, по которому поиск
export function setSearchText(data) {
	return {
	  type: actionTypes.SET_SEARCH_TEXT,
	  data
	};
}

// тип поиска
export function setSearchType(data) {
	return {
	  type: actionTypes.SET_SEARCH_TYPE,
	  data
	};
}

// тип сортировки
export function setSortType(data) {
	return {
	  type: actionTypes.SET_SORT_TYPE,
	  data
	};
}

