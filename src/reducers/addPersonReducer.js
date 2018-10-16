import { Person } from "../components/Person";
import React from "react";

const addPersonReducer = (state = {
    tablePerson : [ <Person name="Noureddine" product="Foot" price = "50.00"/> ]
}, action) => {
    switch (action.type) {
        case "ADD_USER":
            state = {
                ...state,
                tablePerson: [...state.tablePerson, action.payload]
            };
            break;
        case "FILTER":
            state = {
                ...state,
                tablePerson: [...state.tablePerson, action.payload]
            };
            break;
    }
    return state;
};

export default addPersonReducer;