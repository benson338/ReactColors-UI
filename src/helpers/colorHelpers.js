// {
//   paletteName: 'Flat UI Colors v1',
//   id: 'flat-ui-colors-v1',
//   emoji: '🤙',
//   colors: [
//     { name: 'Turquoise', color: '#1abc9c' },
//     { name: 'Emerald', color: '#2ecc71' },
//     { name: 'PeterRiver', color: '#3498db' },
//     { name: 'Amethyst', color: '#9b59b6' },
//     { name: 'WetAsphalt', color: '#34495e' },
//     { name: 'GreenSea', color: '#16a085' },
//     { name: 'Nephritis', color: '#27ae60' },
//     { name: 'BelizeHole', color: '#2980b9' },
//     { name: 'Wisteria', color: '#8e44ad' },
//     { name: 'MidnightBlue', color: '#2c3e50' },
//     { name: 'SunFlower', color: '#f1c40f' },
//     { name: 'Carrot', color: '#e67e22' },
//     { name: 'Alizarin', color: '#e74c3c' },
//     { name: 'Clouds', color: '#ecf0f1' },
//     { name: 'Concrete', color: '#95a5a6' },
//     { name: 'Orange', color: '#f39c12' },
//     { name: 'Pumpkin', color: '#d35400' },
//     { name: 'Pomegranate', color: '#c0392b' },
//     { name: 'Silver', color: '#bdc3c7' },
//     { name: 'Asbestos', color: '#7f8c8d' },
//   ],
// },

import chroma from 'chroma-js';
// Check docs @ https://gka.github.io/chroma.js/

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = { ...starterPalette, colors: {} };
  // for of loop iterates over property values
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  // {..., colors: {50: [], 100: [], ...}}
  // newPalette is mutated from starterPalette
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, levels.length).reverse();
    // console.log(scale);
    // gets an array of 10 shades of given color in '#7d0d42'
    // for in loop iterates over property names(index in case of arrays)
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'),
        // replace ' ' globally with a -
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        // returns rgb color value
        rgba: chroma(scale[i])
          .css()
          .replace('rgb', 'rgba')
          .replace(')', ', 1.0)'),
      });
      // push a shade of given color to the current level, on the next loop next shade is added to the next level & so on & the process continus for each color
    }
    // Hence each shade of a given color gets added to each level(50, 100, ... , 900), similarly every color has its shades distributed over the levels...
  }
  return newPalette;
}

function getScale(hexColor, numberOfColors) {
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
  // returns array of n shades of given color
  // scale() => gradient of given colors
  // mode() => to change default(RGB) to required (lab: CIELAB color space); which is visibily better
  // colors(n) => to generate n equi distant colors from a color scale
}

function getRange(hexColor) {
  // const endColor = '#FFF';
  return [
    // chroma(hexColor).darken(1.4).hex(),
    chroma(hexColor).darken(1.5).hex(),
    hexColor,
    chroma(hexColor).brighten(2.5).hex(),
    // endColor,
  ];
  // chroma(color) => color
  // darken is better than using black
  // color.hex() => color in hex
}

export { generatePalette };
