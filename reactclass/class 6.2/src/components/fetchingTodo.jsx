import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>

      <Todo id={id}></Todo>
    </div>
  );
};

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response=>{
      setTodo(response.data.todo)
    })
   

    
  }, [id]);

  return <div>
  Id: {id}
  <h1>{todo.title}</h1>
  <h4>{todo.description}</h4>
</div>
    
  
}

export default App;
