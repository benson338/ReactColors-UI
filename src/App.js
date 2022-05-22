import { Route, Routes, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import NewPalette from './pages/NewPalette';
import Palette from './pages/Palette';
import PaletteList from './pages/PaletteList';
import SingleColorPalette from './pages/SingleColorPalette';
import { useGlobalContext } from './contexts/GlobalContext';
import { generatePalette } from './helpers/colorHelpers';
import './App.css';

const theme = createTheme({
  palette: {
    white: {
      main: '#fff',
    },
  },
});

function App() {
  const { palettes } = useGlobalContext();
  const location = useLocation();

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'linear' },
    },
    hidden: { opacity: 0, x: '20vw' },
  };

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const PaletteWrapper = () => {
    let { id } = useParams();
    const palette = generatePalette(findPalette(id));

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        style={{ overflow: 'hidden' }}
      >
        <Palette palette={palette} />
      </motion.div>
    );
  };

  const SinglePaletteWrapper = () => {
    let { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        style={{ overflow: 'hidden' }}
      >
        <SingleColorPalette palette={palette} colorId={colorId} />
      </motion.div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PaletteList />} />
          <Route path="/palette/:id" element={<PaletteWrapper />} />
          <Route
            path="/palette/:paletteId/:colorId"
            element={<SinglePaletteWrapper />}
          />
          <Route path="/palette/new" element={<NewPalette />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
