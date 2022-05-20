import { Route, Routes, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import NewPalette from './pages/NewPalette';
import Palette from './pages/Palette';
import PaletteList from './pages/PaletteList';
import SingleColorPalette from './pages/SingleColorPalette';
import { useGlobalContext } from './contexts/GlobalContext';
import { generatePalette } from './helpers/colorHelpers';

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

  console.log(location);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const PaletteWrapper = () => {
    let { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };

  const SinglePaletteWrapper = () => {
    let { paletteId, colorId } = useParams();
    const palette = generatePalette(findPalette(paletteId));
    return <SingleColorPalette palette={palette} colorId={colorId} />;
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PaletteList />} />
        <Route path="/palette/:id" element={<PaletteWrapper />} />
        <Route
          path="/palette/:paletteId/:colorId"
          element={<SinglePaletteWrapper />}
        />
        <Route path="/palette/new" element={<NewPalette />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
