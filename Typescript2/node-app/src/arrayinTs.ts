function maxVal(arr: number[]){
    let max =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }

    }
    return max;
}
let max = maxVal([1,2,3,4,5]);
console.log(max);