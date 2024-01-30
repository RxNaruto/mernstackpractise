function function1(callback:()=> void){
    setTimeout(() => {
        callback();
    }, 1000);
}
function1(function f1(){
    console.log("hi");
})
