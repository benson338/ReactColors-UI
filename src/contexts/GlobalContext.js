import { useState, createContext, useContext, useReducer } from 'react';
import reducer from './Reducer';
import colorsData from '../helpers/colorsData';
import { v4 as uuidv4 } from 'uuid';

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
  });
  // Colors state => should be independent
  const [colors, setColors] = useState([
    { color: 'blue', name: 'blue', id: uuidv4() },
    { color: 'yellow', name: 'yellow', id: uuidv4() },
    { color: 'green', name: 'green', id: uuidv4() },
  ]);

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
