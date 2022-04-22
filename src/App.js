import './App.css';
import Palette from './components/Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[2]} />
    </div>
  );
}

export default App;
