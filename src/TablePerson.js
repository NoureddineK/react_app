import React, { Component } from 'react';
import Person from './Person.js';
import './App.css';
import AddPerson from './AddPerson.js';
import Filter from './Filter.js';
class TablePerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { table: '' };

        //Recuperer les donnees
        if (!localStorage.getItem('PersonsData')) {
            console.log("Using data from Data");
            this.state.table = [
                <Person name="Amine" product="Cinema" price="45.00" />,
                <Person name="Sophie" product="Burger" price="35.00" />,
                <Person name="Kévin" product="Escape Game" price="110.00" />,
                <Person name="Julie" product="Playing cards" price="6.00" />,
                <Person name="Lucie" product="Draught beers" price="120.00" />,
                <Person name="Amine" product="Costumes" price="150.00" />,
                <Person name="Alex" product="Cleaning stuff" price="80.00" />,
                <Person name="Sara" product="Tequila" price="22.00" />,
                <Person name="Julie" product="Shooters" price="50.00" />,
                <Person name="Kévin" product="Whisky" price="70.00" />
            ];
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
        localStorage.setItem('StorageDate', Date.now());
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
        //Ajouter un Item
        let addPerson = <AddPerson table={this.state.table} />;
        let filter = <Filter table={this.state.table} />
        return <div className="tableFinal">
            {filter}         
            {addPerson}
        </div>
    }
}

export default TablePerson
