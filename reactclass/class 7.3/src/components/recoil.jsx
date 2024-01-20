//This will not work any time any atom is used it should be wrapped inside a recoilRoot

import { useRecoilValue } from "recoil"
import { networkAtom } from "./atoms"


const App=()=>{
  const networkNotificationCount = useRecoilValue(networkAtom);

  return (
    <>
    <button>Home</button>
    <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ()</button>
    <button>Messaging ()</button>
    <button>My Network ()</button>
    <button>Me</button>
    </>
  )
}

export default App