'use strict';

import * as appConst from '../constants/appConst';

// получить наименование типа сортировки
export const getSortTypeForServer = (sortType) => {
	for (let key in appConst.sortTypes) {
		if (appConst.sortTypes[key] === sortType) {
			return key;
		}
	}
	return appConst.defaultSortType;
};

// получить наименование типа поиска
export const getSearchTypeForServer = (searchType) => {
	for (let key in appConst.searchTypes) {
		if (appConst.searchTypes[key] === searchType) {
			return key;
		}
	}
	return appConst.defaultSearchType;
};

// получить количество элементов на странице для типа отображения списка
export const getLimitForViewType = (viewType) => {
	if (!!viewType) {
		appConst.viewTypes[appConst.defaultViewType].limit;
	}
	return appConst.viewTypes[appConst.defaultViewType].limit;
};

