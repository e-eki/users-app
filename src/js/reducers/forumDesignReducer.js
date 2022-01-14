'use strict';

import {Map} from 'immutable';
import * as actionTypes from '../actions/actionTypes';

// управление оформлением приложения
export default function forumDesignReducer(state = Map(), action) {
  debugger;
  switch (action.type) {
    case actionTypes.SET_COLOR_THEME:
      return state.set('colorTheme', action.data);

    case actionTypes.SET_VIEW_TYPE:
      return state.set('viewType', action.data);

    default:
      return state;
    }
}

