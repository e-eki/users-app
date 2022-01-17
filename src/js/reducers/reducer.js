'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import usersReducer from './usersReducer';
import listReducer from './listReducer';
import forumDesignReducer from './forumDesignReducer';

const reducer = combineReducers({
  alertDataState: alertDataReducer,
  usersState: usersReducer,
  listState: listReducer,
  forumDesignState: forumDesignReducer,
});

export default reducer;
