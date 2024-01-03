const twice=(a)=>{
    return a*2;
}

const square=(a)=>{
    return a*a;
}

const cube=(a)=>{
    return a*a*a;
}

const calculateSomething=(a,fn)=>{
    const x = fn(a);
    return x;
}

console.log(calculateSomething(4,twice));
console.log(calculateSomething(3,square));
console.log(calculateSomething(3,cube));