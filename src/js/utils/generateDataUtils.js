'use strict';

import * as usersGenerator from 'multi-users-generator';

// список групп
export const groups = [
    { name: 'CEO' },
    { name: 'Designers' },
    { name: 'Development' },
    { name: 'Outsourced' }
];

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
};

const userDataTemplates = [
    {
        position: 'Programmer',
        phone: "+123(456)123-45-67",
        groupId: '61e59efdcea1a604d813d564'
    },
    {
        position: 'UI Designer',
        phone: "+255(666)177-45-67",
        groupId: '61e59efacea1a604d813d563'
    },
    {
        position: 'Manager',
        phone: "+177(890)123-45-67",
        groupId: '61e59effcea1a604d813d565'
    },
    {
        position: 'CEO Specialist',
        phone: "+890(000)123-45-67",
        groupId: '61e59ef7cea1a604d813d562'
    },
    {
        position: 'Engineer',
        phone: "+111(222)876-45-67",
        groupId: null
    }
]

// генерация списка пользователей
export let generateUsers = (count) => {
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