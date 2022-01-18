'use strict';

import {Map} from 'immutable';
import * as actionTypes from '../actions/actionTypes';

// управление списком пользователей
export default function usersReducer(state = Map(), action) {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return state.set('users', action.data);

    case actionTypes.SET_USERS_BY_GROUPS:
      return state.set('usersByGroups', action.data);

    default:
      return state;
    }
}

