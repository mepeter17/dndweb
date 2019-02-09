import React, { Component } from 'react';
import Header from './components/Header';

import ClassScreenContent from './components/ClassScreenContent'
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
        <h1>Tabs go here (Race, Class, etc)</h1>
        <ClassScreenContent/>
      </div>
    );
  }
}

export default App;
