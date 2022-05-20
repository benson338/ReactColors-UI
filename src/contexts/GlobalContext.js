import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from 'react';
import reducer from './Reducer';
import colorsData from '../helpers/colorsData';

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  // palettes state
  const [palettes, setPalettes] = useState(
    JSON.parse(localStorage.getItem('palettes')) || colorsData
  );
  // NewPaletteForm state
  const [newPaletteState, dispatch] = useReducer(reducer, {
    open: false,
    formShowing: false,
    stage: 'form',
    currentColor: 'teal',
    newColorName: '',
    newPaletteName: '',
  });
  // Colors state => should be independent
  const [colors, setColors] = useState(palettes[0].colors);
  // State in PaletteList
  const [deleteState, setDeleteState] = useState({ open: false, id: '' });

  useEffect(() => {
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  return (
    <GlobalContext.Provider
      value={{
        palettes,
        setPalettes,
        newPaletteState,
        dispatch,
        colors,
        setColors,
        deleteState,
        setDeleteState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
