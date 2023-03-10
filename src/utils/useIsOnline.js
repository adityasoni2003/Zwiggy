import { useState } from "react"


const useIsOnline=()=>{
    const [status,setStatus] = useState(true);

    const handleOnline = ()=>{
        setStatus(true)
    }
    const handleOffline = ()=>{
        setStatus(false)
       }

    window.addEventListener("online",handleOnline)
    window.addEventListener("offline",handleOffline)

    return status

}

export default useIsOnline