import React, { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState([]); // Initialize data as an empty array

  const FetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    // Use useEffect to re-render the component when data changes
    console.log("Data updated:", data);
  }, [data]);

  return (
    <div>
      <button onClick={FetchData}>Fetch</button>
      
      <div>
        <h2>Fetched Data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Data;
