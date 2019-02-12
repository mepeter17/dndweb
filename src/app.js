import React, { Component } from 'react';
import Header from './components/Header/Header';
import {Router, Route} from "react-router";
import './App.css';
import { browserHistory } from 'react-router'

import RaceScreenContent from './components/Race/RaceScreenContent'
import Home from './components/Home/Home'

class App extends Component
{
  state = {

  }

  render()
  {
    return (
      <div className="App">
        <Header />
        <Router history={browserHistory} >
          <Route path={"/"} component={Home}/>
          <Route path={"/home"} component={Home}/>
          <Route path={"/race"} component={RaceScreenContent}/>
        </Router>
      </div>
    );
  }
}

export default App;
