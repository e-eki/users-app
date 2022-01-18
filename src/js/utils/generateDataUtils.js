'use strict';

import * as usersGenerator from 'multi-users-generator';

// список групп
export const groups = [
    { name: 'CEO' },
    { name: 'Designers' },
    { name: 'Development' },
    { name: 'Outsourced' }
];

// шаблоны пользовательских данных
const userDataTemplates = [
    {
        position: 'Programmer',
        phone: "+123(456)123-45-67",
        groupId: '61e59efdcea1a604d813d564'
    },
    {
        position: 'Programmer',
        phone: "+110(456)123-45-67",
        groupId: '61e59effcea1a604d813d565'
    },
    {
        position: 'UI Designer',
        phone: "+255(666)177-45-67",
        groupId: '61e59efacea1a604d813d563'
    },
    {
        position: 'UI Designer',
        phone: "+345(666)177-45-67",
        groupId: '61e59effcea1a604d813d565'
    },
    {
        position: 'Manager',
        phone: "+177(890)123-45-67",
        groupId: '61e59effcea1a604d813d565'
    },
    {
        position: 'Manager',
        phone: "+890(890)123-45-67",
        groupId: '61e59ef7cea1a604d813d562'
    },
    {
        position: 'CEO Specialist',
        phone: "+890(000)123-45-67",
        groupId: '61e59ef7cea1a604d813d562'
    },
    {
        position: 'CEO Specialist',
        phone: "+444(000)123-45-67",
        groupId: null
    },
    {
        position: 'Engineer',
        phone: "+111(222)876-45-67",
        groupId: null
    },
    {
        position: 'Engineer',
        phone: "+900(666)876-45-67",
        groupId: '61e59efdcea1a604d813d564'
    }
]

// получить случайное целое число
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

// генерация списка пользователей
export const generateUsers = (count) => {
	const multi = usersGenerator.multiUsers(count);

	const result = multi.map(item => {
		item.personalPage = item.imageUrl;

		delete item.address;
		delete item.username;
		delete item.imageUrl;

        const randomItem = getRandomInt(userDataTemplates.length);
        const userDataTemplate = userDataTemplates[randomItem];

		item.phone = userDataTemplate.phone;
        item.position = userDataTemplate.position;
		item.groupId = userDataTemplate.groupId;
		
		return item;
	});
	
	return result;
}