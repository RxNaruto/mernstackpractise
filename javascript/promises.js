const fs=require('fs');
function readfile(callback){
    fs.readFile('a.txt','utf-8',function(err,data){
        callback(data);
    })

}
function ondone(data){
    console.log(data);
}
readfile(ondone);