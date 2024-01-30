interface user{
    firstName: string;
    lastName: string;
    age: number;
}

const filteredUser=(users: user[])=>{
    return users.filter(x=>x.age>=18);
}

console.log(filteredUser([{
    firstName: "naruto",
    lastName: "Singh",
    age: 21
}, {
    firstName: "hinata",
    lastName: "sharma",
    age: 16
}, ]));