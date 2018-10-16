export function addUser(person) {
    return {
        type: "ADD_USER",
        payload: person
    };
}

export function filterByName(name) {
    return {
        type: "FILTER",
        payload: name
    };
}