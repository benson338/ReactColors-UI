import { useState, createContext, useContext, useReducer } from 'react';
import reducer from './Reducer';
import colorsData from '../helpers/colorsData';

// palette state
// NewPaletteForm state

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [palettes, setPalettes] = useState(colorsData);

  const [newPaletteState, dispatch] = useReducer(reducer, {
    open: false,
    currentColor: 'blue',
    newColorName: '',
    newPaletteName: '',
    colors: [{ color: 'blue', name: 'blue' }],
  });

  return (
    <GlobalContext.Provider
      value={{ palettes, setPalettes, newPaletteState, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
