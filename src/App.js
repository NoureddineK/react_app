import React, { Component } from 'react';
import TablePerson from './TablePerson.js';
import './App.css';
import Person from './Person.js';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Integration Week End</h1>
        </header>
        <div>
          {tableau}
          <Person name={this.props.user.name}product="Test" price="10.00" />
      
        </div>
      </div>
    );
  }
}

let tableau = <TablePerson />;

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  };
};
const mapDispatchToProps =(dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type:"SET_NAME",
        payload: name
      });
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);