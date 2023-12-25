function numbersTillTen(){
    for(let i=0;i<=10;i++){
        console.log(i);
    }
}
setTimeout(numbersTillTen,5000);
console.log("hello world");

function twosec(){
  console.log("i am not going to print after 2s");
 }
setTimeout(twosec,2000);
//the function that reaches the callback queue first will be callbacked