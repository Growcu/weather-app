import { combineReducers } from 'redux';

import { appReducer } from './appReducers';

const rootReducers = combineReducers({
    city: appReducer,
});

export default rootReducers;
