'use strict';

import axios from 'axios';
import apiConst from '../constants/apiConst';

const groupsApi = `${apiConst.groupsApi}`;

// получить список групп
export async function getGroups(data) {
    return axios
        .get(`${groupsApi}`, data)
        .then(response => response.data);
}

// создать группу
export async function createGroup(data) {
    return axios
        .post(`${groupsApi}`, data)
        .then(response => response.data);
}


