import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import NewPalettePage from './components/NewPalettePage';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
import { useGlobalContext } from './contexts/GlobalContext';
import { generatePalette } from './helpers/colorHelpers';

function App() {
  const { palettes } = useGlobalContext();

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
    <Routes>
      <Route path="/" element={<PaletteList />} />
      <Route path="/palette/:id" element={<PaletteWrapper />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SinglePaletteWrapper />}
      />
      <Route path="/palette/new" element={<NewPalettePage />} />
    </Routes>
  );
}

export default App;
