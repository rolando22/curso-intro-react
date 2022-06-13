import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
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
        setSincronizedItem(true);
      } catch(error) {
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };
  
  return { item, saveItem, loading, error, sincronizeItem };
}

export { useLocalStorage };