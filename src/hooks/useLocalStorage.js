import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));
  const { sincronizedItem, error, loading, item } = state;

  //ACTION CREATORS
  const onSuccess = (item) => dispatch({ type: actionTypes.success, payload: item });
  const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSincronize = () => dispatch({ type: actionTypes.sincronize });
  
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
        onSuccess(parseItem);
      } catch(error) {
        onError(error);
      }
    }, 3000);
  }, [sincronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      onSave(newItem);
    } catch(error) {
      onError(error);
    }
  };

  const sincronizeItem = () => {
    onSincronize();
  };
  
  return { item, saveItem, loading, error, sincronizeItem };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESSS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    sincronizedItem: true,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    loading: true,
    sincronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
};

export { useLocalStorage };