"use strict";
const legal = (age) => {
    if (age > 18) {
        return "true";
    }
    else {
        return "false";
    }
};
console.log(legal(13));
