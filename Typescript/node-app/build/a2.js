"use strict";
const isLegal = (age) => {
    if (age > 18) {
        return "legal";
    }
    else {
        return "not legal";
    }
};
const ans = isLegal(20);
console.log(ans);
