import { useState } from "react";
const Data=()=>{
    const[data,setData]=useState([]);

    const FetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }

    return <div>
        <button onClick={FetchData}>Fetch</button>
    </div>
}
export default Data