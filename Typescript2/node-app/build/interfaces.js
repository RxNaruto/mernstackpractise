"use strict";
const details = (user) => {
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.age);
};
const userObject = {
    firstName: "naruto",
    lastName: "uzumaki",
    age: 20
};
details(userObject);
