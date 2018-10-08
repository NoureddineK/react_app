import React, { Component } from 'react';
import Person from './Person.js';
import './App.css';
class TablePerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: '', name: '', price: '', table: '', value: 'All' };

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
        this.selectedValueChange = this.selectedValueChange.bind(this);
        this.tableFinal = this.state.table;
        this.addItemSubmit = this.addItemSubmit.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.productChange = this.productChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
    }

    nameChange(event) {
        this.setState({ name: event.target.value });
    }
    productChange(event) {
        this.setState({ product: event.target.value });
    }
    priceChange(event) {
        this.setState({ price: event.target.value });
    }

    addItemSubmit(event) {
        if (this.state.name !== "" &&
            this.state.product !== "" &&
            this.state.price !== ""
        ) {
            let p = <Person name={this.state.name}
                product={this.state.product}
                price={parseFloat(this.state.price).toFixed(2)} />;
            this.state.table.push(p);
            localStorage.setItem('PersonsData', JSON.stringify(this.state.table));
            event.preventDefault();
        }
        else {
            alert("Empty Text Area !");
        }
        this.state.name = "";
        this.state.product = "";
        this.state.price = "";
    }

    //Fonction de filtrage
    getDataFilter(filter) {
        let tab = [];
        tab = this.state.table.filter(function (p) {
            if (p.props.name === filter) {
                console.log("FilterName  : " + filter);
                return p;
            }
        });
        return tab;
    }


    //Choisir la table a afficher selon le filtre
    selectedValueChange(event) {
        this.setState({ value: event.target.value });
        if (event.target.value === "All") {
            this.tableFinal =  JSON.parse(localStorage.getItem('PersonsData'));
        } else {
            this.tableFinal = this.getDataFilter(event.target.value);;
        }
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
            product: this.state.product,
            name: this.state.name,
            price: this.state.price,
            value: this.state.value,
            table: this.state.table
        });
    }

    //Affichage de la table 
    showTable(table) {
        let tabProduct = table.map((p) =>
            <tr className="tr">
                <td className="tdBlue">{p.props.product}</td>
                <td className="td">Paid By {p.props.name}</td>
                <td className="tdBlue">$ {p.props.price} </td>
            </tr>
        )
        //Calculer la somme
        let sum = table.map(function (p) {
            return parseFloat(p.props.price)
        })
            .reduce(function (acc, val) {
                return acc + val;
            }, 0);
        return (
            <div className="filtre">
                <table className="table">
                    {tabProduct}
                </table>
                <h4>TOTAL EXPENSES </h4>
                $ {sum.toFixed(2)}
            </div>);
    }

    //Ajouter un Item
    addPersonDiv() {
        return (<div className="addPersonDiv">
            <form onSubmit={this.addItemSubmit}>
                <input type="text" value={this.state.product} placeholder="What?" onChange={this.productChange} />
                <input type="text" value={this.state.name} placeholder="Who?" onChange={this.nameChange} />
                <input type="text" pattern="[0-9]*" value={this.state.price} placeholder="$$$" onChange={this.priceChange} />
                <div><input type="submit" value="+" /></div>
            </form>

        </div>);
    }


    render() {
        //Supprimer les Noms en double
        let tabF = [];
        this.state.table.map((p) => {
            if (tabF.indexOf(p.props.name) === -1) {
                tabF.push(p.props.name);
            }
        }
        );
        let names = tabF.map((p) =>
            <option value={p} >{p}</option>
        )

        //Ajouter un Item
        let addPerson = this.addPersonDiv();
        let tabFinalShow = this.showTable(this.tableFinal);

        return <div className="tableFinal">
            <form onSubmit={this.handleSubmit}>
                <label>Filter  : </label>
                <select value={this.state.value} onChange={this.selectedValueChange}>
                    <option value="All" selected >All</option>
                    {names}
                </select>
            </form>
            {tabFinalShow}
            {addPerson}
        </div>
    }
}


export default TablePerson
