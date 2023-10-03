"use client";
import { ReactNode, createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { defaultStateReducer, screenSize } from "../utils/CommonUtils";

const initialState = {
  mobileMax: false,
  tabletMax: false,
  landscape: false,
};

export const ScreenSizeContext = createContext(initialState);

const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(defaultStateReducer, initialState);

  const onWindowResize = () => {
    const payload = screenSize();
    dispatch({ payload });
  };

  useEffect(() => {
    const payload = screenSize();
    dispatch({ payload });
    window.addEventListener("resize", onWindowResize);
  }, []);

  return (
    <ScreenSizeContext.Provider value={state}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

ScreenSizeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ScreenSizeProvider;
