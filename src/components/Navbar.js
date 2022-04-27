import React from 'react';
import { MenuItem, Select } from '@mui/material';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';
import { usePaletteContext } from '../contexts/PaletteContext';

const Navbar = () => {
  const {
    state: { level, format },
    changeLevel,
    changeFormat,
  } = usePaletteContext();
  const changeSliderLevel = (e) => {
    // console.log(e);
    // default param: slider value
    changeLevel(e);
  };
  const handleChange = (e) => {
    changeFormat(e.target.value);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">color picker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            trackStyle={{ backgroundColor: 'transparent' }}
            railStyle={{ height: '8px' }}
            handleStyle={{
              background: 'green',
              outline: 'none',
              border: '2px solid green',
              boxShadow: 'none',
              width: '13px',
              height: '13px',
              marginTop: '-3.25px',
              marginLeft: '-2px',
            }}
            onChange={changeSliderLevel}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default Navbar;
