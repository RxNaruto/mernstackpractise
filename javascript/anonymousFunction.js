
function sumOfSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}

console.log("the sum of square of a and b is "+ sumOfSomething(2,5,function(a){
    return a*a;
}))
