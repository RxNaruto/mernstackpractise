import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <>
      <div>
        <h1>Product Details</h1>
        <p>Name: {data}</p>
        <p>Price: {data.price}</p>
        {/* Add more fields based on the structure of the API response */}
      </div>
    </>
  );
}

export default App;
