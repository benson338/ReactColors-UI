import { useEffect } from 'react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import chroma from 'chroma-js';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '../contexts/GlobalContext';

function DrawerContents() {
  const {
    palettes,
    newPaletteState: { currentColor, newColorName },
    dispatch,
    colors,
    setColors,
  } = useGlobalContext();

  const paletteIsFull = colors.length >= 20;

  const isLightColor = chroma(currentColor).luminance() >= 0.65;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every(({ color }) => color !== currentColor);
    });
  }, [colors, currentColor]);

  const clearColors = () => setColors([]);

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let random,
      randomColor,
      isDuplicate = true;

    while (isDuplicate) {
      random = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[random];
      // eslint-disable-next-line no-loop-func
      isDuplicate = colors.some((color) => color.name === randomColor.name);
    }

    setColors((st) => [...st, randomColor]);
  };

  // AddRandomColor => error versions..
  // silly me, didn't check color.name..
  // version 2
  /* const generateRandomColor = () => {
  const allColors = palettes.map((p) => p.colors).flat();
  return allColors[Math.floor(Math.random() * allColors.length)];
  }; */
  // let usedColors = [];
  // let newColor = generateRandomColor();

  // while (usedColors.includes(newColor)) {
  //   newColor = generateRandomColor();
  // }
  // usedColors.push(newColor);
  // setColors((st) => [...st, newColor]);
  // version 1
  // const noDuplicate = colors.every((color) => color !== randomColor);
  // noDuplicate
  //   ? setColors((colors) => [...colors, randomColor])
  //   : addRandomColor();

  const addNewColor = () => {
    const newColor = {
      color: currentColor,
      name: newColorName,
      id: uuidv4(),
    };

    setColors((colors) => [...colors, newColor]);
    dispatch({ type: 'CLEAR-COLOR-NAME' });
  };

  return (
    <Root>
      <Typography variant="h4" fontSize={'2.1rem'} gutterBottom>
        Design Your Palette
      </Typography>
      <div className="buttons">
        <Button
          variant="contained"
          color="secondary"
          className="button"
          onClick={clearColors}
        >
          Clear Palette
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={addRandomColor}
          disabled={paletteIsFull}
        >
          Random Color
        </Button>
      </div>
      <div className="message">
        <Typography variant="p">Drag N Drop Colors</Typography>
        <ChevronRightIcon />
        <ChevronRightIcon />
        <ChevronRightIcon />
      </div>
      <Container props={{ currentColor, isLightColor }}>
        <ChromePicker
          color={currentColor}
          className="color-picker"
          onChange={(e) =>
            dispatch({ type: 'UPDATE-CURRENT-COLOR', payload: e })
          }
        />
        <ValidatorForm onSubmit={addNewColor} instantValidate={false}>
          <TextValidator
            label="Color Name"
            className="colorNameInput"
            value={newColorName}
            name="newColorName"
            variant="filled"
            margin="normal"
            onChange={(e) => dispatch({ type: 'HANDLE-CHANGE', payload: e })}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name',
              'Color name must be unique',
              'Color already used!',
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            className={`add-color ${paletteIsFull && 'full'}`}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  .buttons {
    width: 100%;
    .button {
      width: 50%;
    }
  }
  .message {
    display: flex;
    padding-top: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  .color-picker {
    width: 100% !important;
    margin-top: 1rem;
  }
  .add-color {
    background: ${({ props }) => props.currentColor};
    color: ${({ props }) =>
      props.isLightColor ? 'rgba(0, 0, 0, 0.8)' : 'white'};
    width: 100%;
    margin-top: 1rem;
    font-size: 1.5rem;
    :hover {
      opacity: 0.95;
    }
    &.full {
      background: grey;
    }
  }
  .colorNameInput {
    width: 100%;
    height: 70px;
  }
`;

export default DrawerContents;
