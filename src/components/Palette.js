import React from 'react';
import ColorBox from './ColorBox';
// import '../styles/Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { usePaletteContext } from '../contexts/PaletteContext';
import styled from '@emotion/styled';

function Palette({ palette }) {
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
      moreUrl={`/palette/${id}/${color.id}`}
      FullPalette
      // colorId={color.id}
      // paletteId={id}
    />
  ));

  return (
    <StyledComponent>
      <Navbar
        level={level}
        format={format}
        changeLevel={changeSliderLevel}
        changeFormat={changeFormat}
        hideSlider={false}
      />
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

export default Palette;
