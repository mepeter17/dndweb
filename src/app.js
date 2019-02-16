import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

        <BrowserRouter basename='dndweb'>
        <div>
        <Header />
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/home"} component={Home}/>
            <Route path={"/race"} component={RaceScreenContent}/>
            <Route path={"/class"} component={ClassScreen}/>
            <Route path={"/stats"} component={Stats}/>
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
