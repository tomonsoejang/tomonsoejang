import { createContext, useReducer } from "react";
import { TOGGLE_DARKMODE } from "./actions";
import reducer from "./reducer";
import { getDarkMode } from "./utils";

let defaultStore = { darkMode: false };

const loadStore = () => {
  let darkMode = getDarkMode();
  if (darkMode) {
    defaultStore = { ...defaultStore, darkMode };
  }
  return defaultStore;
};

const initialState = loadStore();

export const StoreContext = createContext([initialState]);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleDarkMode = () => {
    console.log("hello");
    dispatch({
      type: TOGGLE_DARKMODE,
    });
  };

  return (
    <StoreContext.Provider value={[state, toggleDarkMode]}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
