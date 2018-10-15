import React, { Component } from 'react';
import Person from './Person.js';
import './App.css';
import AddPerson from './AddPerson.js';
import Filter from './Filter.js';
import { connect } from 'react-redux';
class TablePerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { table: '' };

        //Recuperer les donnees
        if (!localStorage.getItem('PersonsData')) {
            console.log("Using data from Data");
            this.state.table = this.props.table;
        } else {
            console.log("Using data from LocalStorage");
            this.state.table = JSON.parse(localStorage.getItem('PersonsData'));
        }
        this.tableFinal = this.state.table;
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.refresh(),
            1000
        );
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('PersonsData', JSON.stringify(this.state.table));
    }

    componentWillMount() {
        localStorage.getItem('PersonsData') && this.setState({
            table: JSON.parse(localStorage.getItem('PersonsData'))
        })
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //Mettre a jour la vue
    refresh() {
        this.setState({
            table: this.state.table
        });
    }

    render() {
        //Ajouter un Item a la table
        let addPerson = <AddPerson table={this.state.table} />;
        //Afficher la table Filter
        let filter = <Filter table={this.state.table} />
        return <div className="tableFinal">
            {filter}
            {addPerson}
       
        </div>
    }
}

const mapState = (state) => {
    return {
      table : state.table
  
    };
  };
  const mapDispatch =(dispatch) => {
    return {
      newPerson: (person) => {
        dispatch({
          type:"ADD_PERSON",
          payload: person
        });
      }
    };
  };
  export default connect(mapState,mapDispatch)(TablePerson);

