import React, { Component } from 'react';
import TablePerson from './TablePerson.js';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Integration Week End</h1>
        </header>
        <div>
          {tableau}         
        </div>
      </div>
    );
  }
}
let tableau = <TablePerson  />;

export default App;