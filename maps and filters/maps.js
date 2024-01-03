const arr=[1,2,3,4,5];
// i want to convert this to arr[2,4,6,8,10]

const transform=(i)=>{
    return i*2;
}
const ans=arr.map(transform);
console.log(ans);
