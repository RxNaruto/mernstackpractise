function squareofsomething(){
    let p =new Promise(function(resolve){
        resolve(10);
    });
    return p;
}
const val=squareofsomething();
val.then(function(data){
    const square=data*data;
    console.log(square);
})