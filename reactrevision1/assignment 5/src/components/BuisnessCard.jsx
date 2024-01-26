const BuisnessCard=()=>{
    return(
      <div className="p-10 m-10 w-96 border border-black">
       <Text1>Lokeshwar</Text1>
       <Text2>A TA in 100xdev cohort</Text2>
       <Text3>Location</Text3>
       <Text4>Web developer</Text4>
       <Button1></Button1>
       
      </div>
    )
  }
  
  const Text1=({children})=>{
    return <div className="text-5xl font-bold font-serif text-gray-800">
      {children}
  
    </div>
  
  }
  const Text2=({children})=>{
    return <div className="text-xl font-serif pt-6 text-gray-600">
      {children}
  
    </div>
  }
  
  const Text3=({children})=>{
    return <div className="text-3xl font-serif pt-6 text-gray-800 font-bold ">
      {children}
  
    </div>
  }
  const Text4=({children})=>{
    return <div className="text-xl font-serif pt-6 text-gray-600">
      {children}
  
    </div>
  }
  const Button1=()=>{
    return <div className="bg-blue-800 w-28">
      <button>Linkedin</button>
    </div>
  }
   export default BuisnessCard
  