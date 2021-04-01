import { combineReducers } from 'redux';

import { appReducer } from './appReducers';

export const rootReducers = combineReducers({
    cityData: appReducer,
});
