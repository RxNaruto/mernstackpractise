// const fs=require('fs');
// function readfile(callback){
//     fs.readFile('a.txt','utf-8',function(err,data){
//         callback(data);
//     })

// }
// function ondone(data){
//     console.log(data);
// }
// readfile(ondone);

//to write this same code in cleaner way
const fs =require('fs');
function readfile(){
    return new Promise(function(resolve){
        fs.readFile('a.txt','utf-8',function(err,data){
                     resolve(data);
        
    });
    })
}
function onDone(data){
    console.log(data);
}
readfile().then(onDone);