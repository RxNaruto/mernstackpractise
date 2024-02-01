function getElement<T>(arr: T[]):T{
    return arr[0]
}

console.log(getElement<number>([1,2,3,4,5]));
console.log(getElement<string>(["n","u"]));