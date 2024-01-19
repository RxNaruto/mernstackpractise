import { useState,useEffect } from "react"


const Fetching=()=>{
    const[data,setData]=useState([]);

    const fetchData=()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(json=>setData(json))
    }
    useEffect(()=>{
        console.log("Data Updated",data)
    },[data]);

    return (
        <div>
            <button onClick={fetchData}>Fetch</button>
            <div>
                <h2>Fetched Data</h2>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    )
    }
    export default Fetching;
   
       
