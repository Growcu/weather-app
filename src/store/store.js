import { applyMiddleware, createStore } from 'redux';

import { rootReducers } from '../reducers/rootReducers';
import downloadDataMiddleware from '../middlewares/downloadDataMiddleware';

const store = createStore(
    rootReducers,
    applyMiddleware(downloadDataMiddleware),
);

export default store;
