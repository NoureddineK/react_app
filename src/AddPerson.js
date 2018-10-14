import React, { Component } from 'react';
import Person from './Person.js';
import './App.css';
class AddPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = { product: '', name: '', price: '' , table:''};
        this.state.table = this.props.table;
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


    render() {
        return (<div className="addPersonDiv">
            <form onSubmit={this.addItemSubmit}>
                <input type="text" value={this.state.product} placeholder="What?" onChange={this.productChange} />
                <input type="text" value={this.state.name} placeholder="Who?" onChange={this.nameChange} />
                <input type="text" pattern="[0-9]*" value={this.state.price} placeholder="$$$" onChange={this.priceChange} />
                <div><input type="submit" value="+" /></div>
            </form>

        </div>);

    }

}

export default AddPerson