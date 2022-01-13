'use strict';

import {createStore} from 'redux';
import reducer from '../reducers/reducer';

// хранилище
const store = createStore(reducer);

export default store;
