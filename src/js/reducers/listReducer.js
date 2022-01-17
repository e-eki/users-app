'use strict';

import {Map} from 'immutable';
import * as actionTypes from '../actions/actionTypes';

// управление получением списка
export default function listReducer(state = Map(), action) {

  switch (action.type) {
    case actionTypes.SET_SEARCH_CHANNELS:
      return state.set('searchChannels', action.data);

    case actionTypes.SET_SEARCH_MESSAGES:
      return state.set('searchMessages', action.data);

    case actionTypes.SET_SEARCH_TYPE:
      return state.set('searchType', action.data);

    case actionTypes.SET_SEARCH_TEXT:
      return state.set('searchText', action.data);

    case actionTypes.SET_SORT_TYPE:
      return state.set('sortType', action.data);

    case actionTypes.SET_CURRENT_PAGE:
      return state.set('currentPage', action.data);

    case actionTypes.SET_TOTAL_PAGES:
      return state.set('totalPages', action.data);

    default:
      return state;
    }
}

