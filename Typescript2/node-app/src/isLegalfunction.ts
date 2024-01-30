interface User{
    firstName:string;
    lastName:string;
    age: number;

}

const islegal=(user: User): boolean=>{
    if(user.age>18){
        return true;
    }
    else{
        return false;
    }
}
const userone:User={
    firstName: "naruto",
    lastName: "uzumaki",
    age:20

}
console.log(islegal(userone));