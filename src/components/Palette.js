import React from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { usePaletteContext } from '../contexts/PaletteContext';

const Palette = ({ palette }) => {
  // console.log(palette);
  // generated palette
  const { colors, paletteName, emoji, id } = palette;
  const {
    state: { level, format },
    changeLevel,
    changeFormat,
  } = usePaletteContext();

  const changeSliderLevel = (e) => {
    // default param: slider value
    changeLevel(e);
  };
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      // colorId={color.id}
      // paletteId={id}
      moreUrl={`/palette/${id}/${color.id}`}
      showLink
    />
  ));

  return (
    <div className="Palette">
      <Navbar
        level={level}
        format={format}
        changeLevel={changeSliderLevel}
        changeFormat={changeFormat}
        hideSlider={false}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default Palette;
