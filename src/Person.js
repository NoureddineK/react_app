import React, { Component } from 'react';
class Person extends React.Component {
    constructor(props) {
        super(props);
        this.name = this.props.name;
        this.product = this.props.product;
        this.price = parseFloat(this.props.price).toFixed(2);
    }

    render() {
        return (<div>
            {this.name}
            {this.product}
            {this.price}
        </div>);
    }
}

export default Person
