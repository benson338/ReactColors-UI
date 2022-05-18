import { useState } from 'react';
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
// ** for overriding with inline css
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import sizes from '../helpers/sizes';

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
    <StyledNavbar>
      <div className="logo" onClick={() => navigate(-1)}>
        <span>⬅ Back</span>
      </div>
      {!hideSlider && (
        <SliderContainer>
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
        </SliderContainer>
      )}
      {hideSlider && <span className="Navbar-span">Pick the Right One🤞</span>}
      <SelectContainer>
        <FormControl variant="standard">
          <Select value={format} onChange={handleFormatChange}>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
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
    </StyledNavbar>
  );
};

const StyledNavbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* height: 6vh; */
  height: 7vh;

  .logo {
    margin-right: 15px;
    padding: 0 1rem;
    font-size: 1.1rem;
    background: #eceff1;
    font-family: 'Segoe UI';
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    @media (max-width: 340px) {
      margin-right: 0;
      padding: 0 0.5rem;
    }

    span {
      @media (max-width: 340px) {
        font-size: 1rem;
      }
    }
  }

  .Navbar-span {
    margin-right: 15px;
    padding: 0 2rem;
    font-size: 1.2rem;
    font-family: 'Segoe UI';
    height: 100%;
    display: flex;
    align-items: center;
    ${sizes.down('sm')} {
      padding: 0 0.2rem;
    }
    ${sizes.down('xs')} {
      display: none;
    }
  }
`;

const SliderContainer = styled.div`
  ${sizes.down('xs')} {
    display: none;
  }
  .slider {
    width: 340px;
    margin: 0 10px;
    display: inline-block;

    ${sizes.down('md')} {
      width: 250px;
    }
    ${sizes.down('sm')} {
      width: 130px;
    }
  }
`;

const SelectContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  ${sizes.down('xs')} {
    margin-right: 0;
  }
`;

export default Navbar;
