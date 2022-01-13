'use strict';

import { combineReducers } from 'redux';
import alertDataReducer from './alertDataReducer';
import userInfoReducer from './userInfoReducer';
import searchReducer from './searchReducer';
import forumDesignReducer from './forumDesignReducer';

const reducer = combineReducers({
  alertDataState: alertDataReducer,
  userInfoState: userInfoReducer,
  searchState: searchReducer,
  forumDesignState: forumDesignReducer,
});

export default reducer;
