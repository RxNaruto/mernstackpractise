const App=()=>{
    return(
      <>
      <Todo title="go to gym" description="go to gym form 5 to 7"/>
      </>
  
    )
  
  }
  interface Todoprops{
    title: string;
    description: string;
  }
  
  function Todo(props: Todoprops){
    return <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      
    </div>
  }
  