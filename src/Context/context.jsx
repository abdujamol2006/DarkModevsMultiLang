import { createContext, useEffect, useReducer } from "react";
export const store = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkmode: !state.darkmode };
    case "CHANGE_LANG":
      return { ...state, lang: action.payload };
  }
}
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    darkmode: false,
    lang: "uz",
  });
  useEffect(() => {
    if (state.darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [state.darkmode]);
  function ChangeMode() {
    return dispatch({ type: "CHANGE_MODE" });
  }
  function ChangeLang(lang) {
    return dispatch({ type: "CHANGE_LANG", payload: lang });
  }

  return (
    <store.Provider value={{ state, ChangeMode, ChangeLang }}>
      {children}
    </store.Provider>
  );
}
export default Provider;
