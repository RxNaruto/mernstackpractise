import { RecoilRoot, useRecoilValue } from "recoil"
import { networkAtom } from "./atoms"
import { jobsAtom, notificationAtom,messagingAtom } from "./atoms"


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
    return (
      <>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {notificationAtomCount}</button>
      <button>My Network {messagingAtomCount}</button>
      <button>Me</button>
      </>
    )

  }

  


export default App