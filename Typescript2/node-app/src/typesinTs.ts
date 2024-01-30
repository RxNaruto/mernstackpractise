type StringorNumber = string | number ;

function printId(a: StringorNumber){
    console.log(a);
}

printId(100);
printId("100");