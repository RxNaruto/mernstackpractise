

function App() {
  
  
  return (
    //or we can do this React.fragment
    <>
      <Header title="harkirat1"></Header>
      <Header title="harkirat2"></Header>
  
    </>
  )

}
function Header({title}){
  return <div>
    {title}
  </div>
}

export default App
