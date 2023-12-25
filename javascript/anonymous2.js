function productofsomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1*val2;
}
console.log("the product of cube of two numbers is "+ productofsomething(2,5,function(a){
    return a*a*a;
}))