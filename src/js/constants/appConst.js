'use strict';

const types = {
	name: {name: 'по имени', value: 'name'},
	personalPage: {name: 'по ссылке на личную страницу', value: 'personalPage'},
	email: {name: 'по имейлу', value: 'email'},
	groupName: {name: 'по группе', value: 'groupName'},
	phone: {name: 'по телефону', value: 'phone'},
	position: {name: 'по должности', value: 'position'}
};

module.exports = {
	// названия роутов
	defaultLink: '/',
	usersLink: '/users',

	// название приложения
	appName: 'Учёт сотрудников компании N',

	// типы отображения списка
	viewTypes: {
		table: {name: 'таблицы', value: 'table', limit: 15},
		cards: {name: 'списка карточек', value: 'cards', limit: 15},
		tiles: {name: 'плитки (по группам)', value: 'tiles', limit: 10},
	},

	// типы сортировки
	sortTypes: types,

	// типы поиска
	searchTypes: types,

	// типы направления сортировки
	sortDirectionTypes: {
		asc: {name: 'по возрастанию', value: 'asc'},
		desc: {name: 'по убыванию', value: 'desc'},
	},

	// тип сортировки по умолчанию
	defaultSortType: 'name',
	// тип направления сортировки по умолчанию
	defaultSortDirectionType: 'asc',
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
	}
}
