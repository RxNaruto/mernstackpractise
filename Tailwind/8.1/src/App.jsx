const App=()=>{

  return (
    <>
    <div style={{display:"flex", justifyContent: "center"}}>
      <div style={{backgroundColor: "red"}}>Hi</div>
      <div style={{backgroundColor: "blue"}}>Hi</div>
      <div style={{backgroundColor: "green"}}>Hi</div>
    </div>

    //same code in tailwind can be written like
    <div className='flex justify-center'>
      <div className="bg-red-500">hi</div>
      <div className="bg-blue-500">hi</div>
      <div className="bg-yellow-500">hi</div>
    </div>

    </>
    
  )
}
export default App
