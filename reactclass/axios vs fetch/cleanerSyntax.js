async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method: "POST"
    });
    const json = await response.json();
    console.log(json);
}
main();