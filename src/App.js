import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './screens/Home';
import ServiceScreen from './screens/ServiceScreen';
import BrakeBleeding from './screens/BrakeBleeding';

function App() {
    return (
        <div className='App' data-spy='scroll' data-target='.navbar'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/book' exact component={ServiceScreen} />
                    <Route
                        path='/brakebleeding'
                        exact
                        component={BrakeBleeding}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
