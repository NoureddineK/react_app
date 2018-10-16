import React from 'react';

export const Person = (props) => {

    return (<tr className="tr">
        <td className="tdBlue"> {props.product} </td>
        <td className="td">Paid By {props.name} </td>
        <td className="tdBlue">${parseFloat(props.price).toFixed(2)}</td>
    </tr>);

}

