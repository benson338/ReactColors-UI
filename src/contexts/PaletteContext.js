import { useState, createContext, useContext } from 'react';

const PaletteContext = createContext();

const PaletteProvider = ({ children }) => {
  const [state, setState] = useState({ level: 500, format: 'hex' });

  const changeLevel = (level) => setState((st) => ({ ...st, level: level }));

  const changeFormat = (format) =>
    setState((st) => ({ ...st, format: format }));

  return (
    <PaletteContext.Provider value={{ state, changeLevel, changeFormat }}>
      {children}
    </PaletteContext.Provider>
  );
};

const usePaletteContext = () => useContext(PaletteContext);

export { usePaletteContext, PaletteProvider };
