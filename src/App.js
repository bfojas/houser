import React, { Component } from 'react';
import './App.css';
import {NavLink} from 'react-router-dom';
import routes from './routes.js';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="routes">
        {routes}
        </div>
      </div>
    );
  }
}

export default App;
