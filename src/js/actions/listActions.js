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

// текущая страница
export function setCurrentPage(data) {
	return {
	  type: actionTypes.SET_CURRENT_PAGE,
	  data
	};
}

// всего страниц списка
export function setTotalPages(data) {
	return {
	  type: actionTypes.SET_TOTAL_PAGES,
	  data
	};
}

