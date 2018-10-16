export function setName(name) {
    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name);
            }, 1000);
        })
    };
}

export function setProduct(product) {
    return {
        type: "SET_PRODUCT",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(product);
            }, 1000);
        })
    };
}

export function setPrice(price) {
    return {
        type: "SET_PRICE",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(price);
            }, 1000);
        })
    };
}