import styled from '@emotion/styled';
import ColorBox from '../components/ColorBox';
import Navbar from '../components/Navbar';
import PaletteFooter from '../components/PaletteFooter';
import { usePaletteContext } from '../contexts/PaletteContext';
import sizes from '../helpers/sizes';

function Palette({ palette }) {
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
  display: flex;
  flex-direction: column;
  // overflow-x: hidden;
  // overflow-y: auto;
  overflow: hidden;
  position: relative;

  .Palette-colors {
    min-height: 88vh;
    max-height: 100%;
    // bellow for scrollable/small screens only
    ${sizes.down('md')} {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
`;

export default Palette;
