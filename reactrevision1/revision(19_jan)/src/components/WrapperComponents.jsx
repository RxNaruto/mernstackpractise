const App=()=>{
    return(
      <>
      <Card>hi this is from card 1</Card>
      <div style={{
        margin: 10
      }}> <Card>hi this is from card 2</Card></div>
      </>
    )
     
  }
  
  const Card=({children})=>{
    return <div style={{
      border: "1px solid black",
      padding: 10,
      margin: 10
    }}>
      {children}
      
  
  
    </div>
  }
  
  export default App