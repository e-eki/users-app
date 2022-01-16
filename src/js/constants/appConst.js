'use strict';

module.exports = {
	// названия роутов
	defaultLink: '/',
	searchLink: '/search',
	usersLink: '/users',

	// название приложения
	appName: 'Учёт сотрудников компании N',

	// типы сортировки
	sortTypes: {
		name: 'по имени',
		personalPage: 'по ссылке на личную страницу',
		email: 'по имейлу',
		group: 'по группе',
		phone: 'по телефону',
		position: 'по должности'
	},

	// типы поиска
	searchTypes: {
		name: 'по имени',
		personalPage: 'по ссылке на личную страницу',
		email: 'по имейлу',
		group: 'по группе',
		phone: 'по телефону',
		position: 'по должности'
	},

	// типы отображения списка пользователей
	viewTypes: {
		table: 'таблицы',
		cards: 'списка карточек',
		tiles: 'плитки (по группам)'
	},

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
}
