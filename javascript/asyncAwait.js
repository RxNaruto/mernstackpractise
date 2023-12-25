function sumOfSomething(){
    let p = new Promise(function(resolve){
        resolve(5);
    });
    return p;

}
//one way is this
// const val = sumOfSomething();
// val.then(function(data){
//     const sum=data+2;
//     console.log(sum);
// })

//async await syntax
async function main(){
    const val=await sumOfSomething();
    console.log(val+2);
}
main();