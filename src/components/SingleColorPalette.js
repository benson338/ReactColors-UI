import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { usePaletteContext } from '../contexts/PaletteContext';
import PaletteFooter from './PaletteFooter';
import styled from '@emotion/styled';

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
  /* display: flex;
  flex-direction: column; */
  overflow: hidden;

  .Palette-colors {
    height: 88vh;
  }

  .Palette-footer {
    background: white;
    height: 5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .emoji {
      font-size: 1.2rem;
      margin: 0 1rem;
      margin-top: -4px;
    }
  }
`;

export default SingleColorPalette;
