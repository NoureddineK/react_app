import React, { Component } from 'react';
import './App.css';
class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { table: '', value: 'All' };
        this.state.table = this.props.table;
        this.tableFinal = this.state.table;
        this.selectedValueChange = this.selectedValueChange.bind(this);
    }

    //Choisir la table a afficher selon le filtre
    selectedValueChange(event) {
        this.setState({ value: event.target.value });
        if (event.target.value === "All") {
            this.tableFinal = JSON.parse(localStorage.getItem('PersonsData'));
        } else {
            this.tableFinal = this.getDataFilter(event.target.value);;
        }

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
                <div className="total">
                    <h4 className="total_text">TOTAL EXPENSES  
                    <br />$ {sum.toFixed(2)}
                    </h4>
                   
                </div>

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
        );
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
        </div>

    }
}
export default Filter
