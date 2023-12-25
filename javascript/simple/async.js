//simple function

function async(callback){
    setTimeout(callback,2000);
}
async(function(){
    console.log("hello after 2s"
    );
})

