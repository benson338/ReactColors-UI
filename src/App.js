import './App.css';
import Palette from './components/Palette';
import { generatePalette } from './helpers/colorHelpers';
import colorsData from './helpers/colorsData';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(colorsData[2])} />
    </div>
  );
}

export default App;
