import { useEffect, useRef } from "react";

const useWatcher = (
  data: any,
  callback: (err: any, result: any) => void,
  options?: { watchLocalStorage: { key: string; interval?: number } } = {
    watchLocalStorage: { key: "tst", interval: 1000 },
  }
) => {
  const prevDataRef = useRef();

  // Watch regular data changes
  useEffect(() => {
    const prevData = prevDataRef.current;
    if (prevData !== undefined) {
      callback(prevData, data);
    }
    prevDataRef.current = data;
  }, [data, callback]);

  // Watch localStorage changes if enabled
  useEffect(() => {
    if (options.watchLocalStorage) {
      const { key, interval } = options.watchLocalStorage;

      const handleStorageChange = (event) => {
        if (event.key === key) {
          const newValue = event.newValue;
          const oldValue = event.oldValue;
          callback(oldValue, newValue);
        }
      };

      // Listen for changes from other tabs
      window.addEventListener("storage", handleStorageChange);

      // Poll for changes in the same tab
      const intervalId = setInterval(() => {
        const currentValue = localStorage.getItem(key);
        if (currentValue !== prevDataRef.current) {
          callback(prevDataRef.current, currentValue);
          prevDataRef.current = currentValue;
        }
      }, interval);

      return () => {
        window.removeEventListener("storage", handleStorageChange);
        clearInterval(intervalId);
      };
    }
  }, [options.watchLocalStorage, callback]);
};

export default useWatcher;
