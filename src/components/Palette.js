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

  const colors = palette.colors;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} />
  ));

  return (
    <div className="Palette">
      <Navbar />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};

export default Palette;
