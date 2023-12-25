function tofindsquare(){
 return new Promise(function(resolve){
    let data=5;
    resolve(data);
})
}
const val=tofindsquare();
val.then(function(data){
    const square=data*data;
    console.log(square);
})