import { Action, State } from "../types";
import { saveDarkMode } from "../utils";

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      let darkMode = state.darkMode ? false : true;
      let store = { ...state, darkMode };
      saveDarkMode(darkMode);
      return store;
    default:
      return state;
  }
};

export default reducer;
