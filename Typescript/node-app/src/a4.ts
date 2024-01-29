interface User{
    firstName: string;
    lastName: string;
    age: number
};

function islegal(user: User){
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
function greet(user: User){
    console.log("hi there" + user.firstName);
}
islegal({
    firstName: "naruto",
    lastName: "uzumaki",
    age: 20
})