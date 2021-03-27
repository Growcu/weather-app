import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from '../store/store';
import Nav from './Nav';
import CurrentLocation from './CurrentLocation';
import OtherLocation from './OtherLocation';

import '../styles/App.scss';

const App = () => (
    <Provider store={store}>
        <div className="app">
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path="/currentLocation" exact component={CurrentLocation} />
                    <Route path="/otherLocation" exact component={OtherLocation} />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>
);
export default App;
