"use strict";
;
function islegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("hi there" + user.firstName);
}
islegal({
    firstName: "naruto",
    lastName: "uzumaki",
    age: 20
});
