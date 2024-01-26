const axios = require('axios');

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/35aa510b-27a2-4b79-be48-43c59d95919e",{
        username: "naruto",
        password: "123456",
    },{
        headers: {
            Authorization: "Bearer 123",
        },
    },
    );
    console.log(response.data);
}
main();