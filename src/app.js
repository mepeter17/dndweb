import React, { Component } from 'react';
import Header from './components/Header';
import ClassButtonList from './components/ClassButtonList'
import './App.css';

class App extends Component
{
  state = {

  }

  render()
  {
    return (
      <div className="App">
      <Header />
        <h1>App</h1>
        <ClassButtonList/>
      </div>
    );
  }
}

export default App;
