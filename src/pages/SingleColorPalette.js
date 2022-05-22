import React from 'react';
import styled from '@emotion/styled';
import ColorBox from '../components/ColorBox';
import Navbar from '../components/Navbar';
import PaletteFooter from '../components/PaletteFooter';
import { usePaletteContext } from '../contexts/PaletteContext';

function SingleColorPalette({ palette, colorId }) {
  // console.log(colorId); => is same as color name
  const {
    state: { format },
    changeFormat,
  } = usePaletteContext();
  const { colors, paletteName, emoji } = palette;

  const generateShades = (colorId) => {
    let shades = [];
    for (let i in colors) {
      shades = shades.concat(colors[i].filter((color) => color.id === colorId));
    }
    // return all shades of given color
    // return shades.slice(1);
    return shades;
  };
  const shades = generateShades(colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.name}
      FullPalette={false}
    />
  ));

  return (
    <StyledComponent>
      <Navbar format={format} changeFormat={changeFormat} hideSlider />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </StyledComponent>
  );
}

const StyledComponent = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .Palette-colors {
    height: 88vh;
  }
`;

export default SingleColorPalette;
