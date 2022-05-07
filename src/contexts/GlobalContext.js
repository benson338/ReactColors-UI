import { useState, createContext, useContext } from 'react';
import colorsData from '../helpers/colorsData';

// palette state
// NewPaletteForm state

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [palettes, setPalettes] = useState(colorsData);

  return (
    <GlobalContext.Provider value={{ palettes, setPalettes }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
