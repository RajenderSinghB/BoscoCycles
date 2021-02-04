import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './screens/Home';
import ServiceScreen from './screens/ServiceScreen';

function App() {
    return (
        <div className='App' data-spy='scroll' data-target='.navbar'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/book' exact component={ServiceScreen} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
