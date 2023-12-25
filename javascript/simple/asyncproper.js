function async(){
    let p= new Promise(function(resolve){
        setTimeout(resolve,2000);
    });
    return p;
}
const value =async();
value.then(function(){
    console.log("hi there");
})