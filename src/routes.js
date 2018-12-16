import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Header from './components/Header';
// import House from './components/House';
import Wizard1 from './components/Wizard1';
import Wizard2 from './components/Wizard2';
import Wizard3 from './components/Wizard3';



export default(
    <Switch>
        <Route path="/wizard1" component={Wizard1}/>
        <Route path="/wizard2" component={Wizard2}/>
        <Route path="/wizard3" component={Wizard3}/>
        <Route path="/" component={Dashboard}/>
    </Switch>
)