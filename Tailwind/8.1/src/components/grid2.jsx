const App=()=>{

    return (
      <>
     <div className="grid grid-cols-3">
      <div className="bg-red-500">hi</div>
      <div className="bg-blue-500">hi</div>
      <div className="bg-green-500">hi</div>
     </div>
  
     <div className="grid grid-cols-10">
      <div className="bg-red-500 col-span-4">hi</div>
      <div className="bg-blue-500 col-span-4">hi</div>
      <div className="bg-green-500 col-span-2">hi</div>
     </div>
      </>
      
    )
  }
  export default App
  