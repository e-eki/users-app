'use strict';

import axios from 'axios';
import apiConst from '../constants/apiConst';

const usersByGroupsApi = `${apiConst.usersByGroupsApi}`;

// получить список пользователей по группам
export async function getUsersByGroups(data) {
    return axios
        .get(`${usersByGroupsApi}`, data)
        .then(response => response.data);
}


