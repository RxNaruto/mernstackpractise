import { useEffect, useState } from 'react'
import axios from 'axios'
function useTodo(){
  const [todos, setTodos] = useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }, [])
return {todos,loading}

}
function App() {
  const {todos,loading} = useTodo();

  if(loading){
    return <div>
      loading..
    </div>
  }
  
  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App