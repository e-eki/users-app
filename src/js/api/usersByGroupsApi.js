'use strict';

import axios from 'axios';
import apiConst from '../constants/apiConst';

const usersByGroupsApi = `${apiConst.usersByGroupsApi}`;

// получить список пользователей по группам
export async function getUsersByGroups(data) {
    return axios
        .get(`${usersByGroupsApi}?start=${data.start}&limit=${data.limit}&sortType=${data.sortType}&sortDirectionType=${data.sortDirectionType}&searchType=${data.searchType}&searchText=${data.searchText}`, data)
        .then(response => response.data);
}
