interface User{
    firstName: string;
    lastName: string;
    age: number;
   
}

const details=(user: User)=>{
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.age);

}
const userObject: User={
    firstName: "naruto",
    lastName: "uzumaki",
    age: 20
}

details(userObject);