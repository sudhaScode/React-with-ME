import React from "react";
import {useOnlineStatus} from './useNetworkStatus';


function NetworkStatus(){
const isOnline = useOnlineStatus();
    

    return(
        <>
        <h1>{isOnline?'✅ Online': '❌ Disconnected'}</h1>
        </>
    )
}
export default NetworkStatus;


