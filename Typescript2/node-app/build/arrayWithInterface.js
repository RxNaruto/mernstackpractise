"use strict";
const filteredUser = (users) => {
    return users.filter(x => x.age >= 18);
};
console.log(filteredUser([{
        firstName: "naruto",
        lastName: "Singh",
        age: 21
    }, {
        firstName: "hinata",
        lastName: "sharma",
        age: 16
    },]));
