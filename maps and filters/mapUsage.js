const arr1 = [1,2,4,5,6];
const transform=(a)=>{
    return a*a;
}

const ans=arr1.map(transform);
console.log(ans);

const ans2=arr1.map(function(a){
    return a*a*a;
})
console.log(ans2);