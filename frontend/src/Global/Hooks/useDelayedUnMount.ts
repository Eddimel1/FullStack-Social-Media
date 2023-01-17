import { useState, useEffect } from "react";

export function useDelayedUnmount(isMounted, delay) {
    const [shouldRender, setShouldRender] = useState(false);
  
    useEffect(() => {
      let timeoutId;
  
      if (isMounted && !shouldRender) {
        setShouldRender(true);
      } else if (!isMounted && shouldRender) {
        timeoutId = setTimeout(() => setShouldRender(false), delay);
      }
  
      return () => clearTimeout(timeoutId);
    });
  
    return shouldRender;
  }