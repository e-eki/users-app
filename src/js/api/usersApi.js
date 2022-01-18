'use strict';

import axios from 'axios';
import apiConst from '../constants/apiConst';

const usersApi = `${apiConst.usersApi}`;

// получить список пользователей
export async function getUsers(data) {
    return axios
		.get(`${usersApi}?start=${data.start}&limit=${data.limit}&sortType=${data.sortType}&sortDirectionType=${data.sortDirectionType}&searchType=${data.searchType}&searchText=${data.searchText}`, data)
        .then(response => response.data);
}

// создать пользователя
export async function createUser(data) {
    return axios
        .post(`${usersApi}`, data)
        .then(response => response.data);
}

