
import React, { createContext, useState } from 'react';

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [signupPopup, setSignupPopup] = useState(false);

  return (
    <PopupContext.Provider value={{ signupPopup, setSignupPopup }}>
      {children}
    </PopupContext.Provider>
  );
};
