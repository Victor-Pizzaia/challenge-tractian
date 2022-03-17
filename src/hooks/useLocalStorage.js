import { useState, useCallback } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
      try {
          setStoredValue(value);
          localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
          setStoredValue(initialValue);
      }
  }, [key]);

  return [storedValue, setValue];
};
