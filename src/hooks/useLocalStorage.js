import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageTodos = localStorage.getItem(itemName);
          let parseItem = initialValue;
          if (!localStorageTodos) {
            localStorage.setItem(itemName, JSON.stringify(parseItem));
          } else {
            parseItem = JSON.parse(localStorageTodos);
          }
          setItem(parseItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 2000);
    }, []);
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };
  
    return { item, saveItem, loading, error };
  }

  export { useLocalStorage };