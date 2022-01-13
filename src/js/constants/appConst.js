'use strict';

module.exports = {
	// названия роутов
	defaultLink: '/',
	searchLink: '/search',
	usersLink: '/users',

	// название приложения
	appName: 'Учёт пользователей компании N',

	// типы поиска
	searchTypes: {
		channels: 'по чатам',
		messages: 'по сообщениям',
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
