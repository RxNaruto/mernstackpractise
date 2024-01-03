const arr=[1,2,3,4,5];
const filterLogic=(n)=>{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}
const newarr=arr.filter(filterLogic);
console.log(newarr);
