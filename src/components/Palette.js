import React from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';
import Navbar from './Navbar';
import { usePaletteContext } from '../contexts/PaletteContext';

const Palette = ({ palette }) => {
  // console.log(palette);
  const {
    state: { level, format },
  } = usePaletteContext();

  const { colors, paletteName, emoji } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
  ));

  return (
    <div className="Palette">
      <Navbar />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};

export default Palette;
