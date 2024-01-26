 function main(){
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async(response)=>{
        const json = await response.json();
        console.log(json);
    });

}
main();