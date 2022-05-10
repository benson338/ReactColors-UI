import { useState, createContext, useContext, useReducer } from 'react';
import reducer from './Reducer';
import colorsData from '../helpers/colorsData';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // palettes state
  const [palettes, setPalettes] = useState(colorsData);
  // NewPaletteForm state
  const [newPaletteState, dispatch] = useReducer(reducer, {
    open: false,
    currentColor: 'blue',
    newColorName: '',
    newPaletteName: '',
    colors: [{ color: 'blue', name: 'blue', id: 123 }],
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
