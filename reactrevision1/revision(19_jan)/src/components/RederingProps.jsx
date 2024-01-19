function App(){
    return(
      <>
      <Header title="My name is naruto"></Header>
      <Header title="My name is sasuke"></Header>
      
      </>
    )
  
    function Header({title}){
      return <div>
        {title}
      </div>
    }
  }
  
  export default App;