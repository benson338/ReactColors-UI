import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Slide,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ level, format, changeLevel, changeFormat, hideSlider }) => {
  const navigate = useNavigate();
  const [snackstate, setSnackstate] = useState({
    open: false,
    Transition: undefined,
  });

  const SlideTransition = (props) => <Slide {...props} direction="up" />;

  const handleFormatChange = (e) => {
    changeFormat(e.target.value);
    setSnackstate({ open: true, Transition: SlideTransition });
    // Setting transition as state & providing new Slide is neccessary for getting sliding snackbar with state change
  };
  const handleClose = () => setSnackstate({ ...snackstate, open: false });

  return (
    <header className="Navbar">
      <div className="logo" onClick={() => navigate(-1)}>
        <span>⬅ Back</span>
      </div>
      {!hideSlider && (
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
              onChange={changeLevel}
            />
          </div>
        </div>
      )}
      {hideSlider && <span className="Navbar-span">Pick the Right One🤞</span>}
      <div className="select-container">
        <FormControl variant="standard">
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Snackbar
        open={snackstate.open}
        autoHideDuration={2900}
        onClose={handleClose}
        TransitionComponent={snackstate.Transition}
        message={`Format Changed To ${format.toUpperCase()}👍`}
        action={
          <IconButton
            onClick={handleClose}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </header>
  );
};

export default Navbar;
