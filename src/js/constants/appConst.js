'use strict';

const types = {
	name: {name: 'по имени', value: 'name'},
	personalPage: {name: 'по ссылке на личную страницу', value: 'personalPage'},
	email: {name: 'по имейлу', value: 'email'},
	groupId: {name: 'по группе', value: 'groupId'},
	phone: {name: 'по телефону', value: 'phone}'},
	position: {name: 'по должности', value: 'position'}
};

module.exports = {
	// названия роутов
	defaultLink: '/',
	searchLink: '/search',
	usersLink: '/users',

	// название приложения
	appName: 'Учёт сотрудников компании N',

	// типы отображения списка
	viewTypes: {
		table: {name: 'таблицы', value: 'table', limit: 10},
		cards: {name: 'списка карточек', value: 'cards', limit: 10},
		tiles: {name: 'плитки (по группам)', value: 'tiles', limit: 10},
	},

	// типы сортировки
	sortTypes: types,

	// типы поиска
	searchTypes: types,

	// тип сортировки по умолчанию
	defaultSortType: 'name',
	// тип поиска по умолчанию
	defaultSearchType: 'name',
	// тип отображения по умолчанию
	defaultViewType: 'table',

	// цветовые темы оформления
	colorThemes: {
		day: 'day',
		night: 'night',
	},

	// названия цветовых тем оформления
	colorThemeTitles: {
		day: 'Дневной режим',
		night: 'Ночной режим',
	},

	// типы всплывающих окон
	popupTypes: {
		alert: 'alert',  // оповещения для юзера
		userInfo: 'userInfo',   // информация юзера
		info: 'info',   // информация элемента форума (раздел/подраздел/чат/сообщение)
		adding: 'adding',    // добавление элемента форума
	}
}
