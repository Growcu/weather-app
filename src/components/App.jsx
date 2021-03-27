import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import CurrentLocation from './CurrentLocation';
import OtherLocation from './OtherLocation';
import '../styles/App.scss';

const App = () => (
    <div className="app">
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path="/currentLocation" exact component={CurrentLocation} />
                <Route path="/otherLocation" exact component={OtherLocation} />
            </Switch>
        </BrowserRouter>
    </div>
);
export default App;
