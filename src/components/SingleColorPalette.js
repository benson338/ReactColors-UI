import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

function SingleColorPalette({ palette, colorId }) {
  // console.log(colorId); => is same as color name
  const gatherShades = (palette, colorId) => {
    // return all shades of given color
    let shades = [];
    const colors = palette.colors;

    for (let i in colors) {
      shades = shades.concat(colors[i].filter((color) => color.id === colorId));
    }

    // console.log(shades);
    // return shades.slice(1);
    return shades;
  };
  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      background={color.hex}
      name={color.name}
      key={color.name}
      showLink={false}
    />
  ));

  return (
    <div className="Palette">
      <Navbar hideLevel />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
