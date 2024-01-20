import { useEffect } from "react";
import axios from 'axios'
import { RecoilRoot, useRecoilSnapshot, useRecoilState, useRecoilValue } from "recoil";

function App(){
    return<RecoilRoot>

    </RecoilRoot>
}

function MainApp(){
    const[networkCount,setNetworkCount]=useRecoilState(notification);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
    },[])


return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App