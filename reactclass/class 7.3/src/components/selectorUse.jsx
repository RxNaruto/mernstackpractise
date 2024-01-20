import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { networkAtom, totalNotificationSelector } from "./atoms"
import { jobsAtom, notificationAtom,messagingAtom } from "./atoms"
import { useMemo } from "react"


const App=()=>{
  return <RecoilRoot>
    <MyApp></MyApp>
  </RecoilRoot>
  
}
  const MyApp=()=>{
    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobsAtomCount = useRecoilValue(jobsAtom);
    const notificationAtomCount = useRecoilValue(notificationAtom);
    const messagingAtomCount = useRecoilValue(messagingAtom);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);
      
    return (
      <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Notification {notificationAtomCount}</button>
      <button>messaging {messagingAtomCount}</button>
      <button>Me ({totalNotificationCount})</button>
     
      </>
    )

  }
 

  


export default App