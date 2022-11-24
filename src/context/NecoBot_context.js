import { createContext, useReducer, useContext } from 'react';

const initialState = {
  loading: false,
  alerts: [],
};

const reducers = (state, action) => {
  switch (action.type) {
    case 'LOADING_RUN':
      return {
        ...state,
        loading: true,
      };
    case 'LOADING_STOP':
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

const NecoBotContext = createContext();

const NecoBotProvider = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  return <NecoBotContext.Provider value={{ state, dispatch }} {...props} />;
};

const useNecoBot = () => useContext(NecoBotContext);

export { NecoBotProvider, useNecoBot };
