import { useState } from "react";

export function useIsOnline(){

    const [onlineStatus, setOnlineStatus] = useState(true);

    window.addEventListener('online', function(e){
        setOnlineStatus(true);
    })

    window.addEventListener('offline', function(e){
        setOnlineStatus(false);
    });

    return onlineStatus;
}