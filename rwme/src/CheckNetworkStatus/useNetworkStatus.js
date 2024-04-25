import { useState, useEffect } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  //console.log(navigator.onLine)
  window.ononline = (event) => {
    console.log("You are now connected to the network.");
  };
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
      console.log("online", "DEBUG")
    }
    function handleOffline() {
      setIsOnline(false);
      console.log("offline", "DEBUG")
    }
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (navigator.onLine !== isOnline) {
        setIsOnline(navigator.onLine); // Set state based on current online status
      }
    };
  }, [isOnline]);
  
  return isOnline;
}

