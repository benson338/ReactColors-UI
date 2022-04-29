import { Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import { generatePalette } from './helpers/colorHelpers';
import colorsData from './helpers/colorsData';

function App() {
  const findPalette = (id) => {
    return colorsData.find((palette) => palette.id === id);
  };
  const PaletteWrapper = () => {
    let { id } = useParams();
    const palette = generatePalette(findPalette(id));
    return <Palette palette={palette} />;
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={colorsData} />} />
      <Route path="/palette/:id" element={<PaletteWrapper />} />
    </Routes>

    // <div>
    //   <Palette palette={generatePalette(colorsData[2])} />
    // </div>
  );
}

export default App;
