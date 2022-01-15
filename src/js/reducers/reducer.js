'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import usersReducer from './usersReducer';
import searchReducer from './searchReducer';
import forumDesignReducer from './forumDesignReducer';

const reducer = combineReducers({
  alertDataState: alertDataReducer,
  usersState: usersReducer,
  searchState: searchReducer,
  forumDesignState: forumDesignReducer,
});

export default reducer;
