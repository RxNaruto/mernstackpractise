

import  { useState, useEffect } from 'react';

function App(){
  const[render,setRender]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setRender(false)
      
    }, 4000);
  },[])

  return(
    <>
    {render ? <MyComponent/>: <div></div>}
    
    </>
  )
}
function MyComponent() {
  useEffect(() => {
    console.log("component mounted");
    // Perform setup or data fetching here

    return () => {
      console.log("component unmounted");
      // Cleanup code (similar to componentWillUnmount)
    };
  }, []);
  return <div>
    From inside the component
  </div>
  // Render UI
}
export default App