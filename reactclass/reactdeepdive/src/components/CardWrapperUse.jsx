import React from "react"
function App(){
  return <div>
    <CardWrapper>
    <CardWrapper>
      <TextComponent></TextComponent>
    </CardWrapper> 
    </CardWrapper>
  </div>
}
const CardWrapper=({children})=>{
  return <div style={{border: "2px solid Black" , padding: 20}}>
    {children}
  </div>

}
const TextComponent=()=>{
  return <div>
    hi there
  </div>
}
export default App