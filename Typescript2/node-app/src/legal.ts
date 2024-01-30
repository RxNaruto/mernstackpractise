const legal=(age: number):string=>{
    if(age>18){
        return "true";
    }
    else{
        return "false";

    }
}

console.log(legal(13));