import React, { Component } from 'react';
import Header from './components/Header/Header';
import {Router, Route} from "react-router";
import './App.css';
import { browserHistory } from 'react-router'

import RaceScreenContent from './components/Race/RaceScreenContent'
import Home from './components/Home/Home'
import ClassScreen from './components/Class/ClassScreen'
import Stats from './components/Stats/Stats'

class App extends Component
{
  state = {

  }

  render()
  {
    return (
      <div className="App">
        <Header />
        <Router history={browserHistory} basename="/dndweb" >
          <Route path={"/"} component={Home}/>
          <Route path={"/race"} component={RaceScreenContent}/>
          <Route path={"/class"} component={ClassScreen}/>
          <Route path={"/stats"} component={Stats}/>
        </Router>
      </div>
    );
  }
}

export default App;
