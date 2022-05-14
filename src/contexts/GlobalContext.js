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
    formShowing: false,
    stage: 'form',
    currentColor: 'blue',
    newColorName: '',
    newPaletteName: '',
  });
  // Colors state => should be independent
  const [colors, setColors] = useState(palettes[0].colors);

  return (
    <GlobalContext.Provider
      value={{
        palettes,
        setPalettes,
        newPaletteState,
        dispatch,
        colors,
        setColors,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
