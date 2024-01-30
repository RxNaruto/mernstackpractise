"use strict";
const islegal = (user) => {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
};
const userone = {
    firstName: "naruto",
    lastName: "uzumaki",
    age: 20
};
console.log(islegal(userone));
