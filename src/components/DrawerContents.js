import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useGlobalContext } from '../contexts/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';

function DrawerContents() {
  const {
    palettes,
    newPaletteState: { currentColor, newColorName },
    dispatch,
    colors,
    setColors,
  } = useGlobalContext();

  const paletteIsFull = colors.length >= 20;

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
    const random = Math.floor(Math.random() * allColors.length);
    const randomColor = allColors[random];

    const noDuplicate = colors.every((color) => color !== randomColor);
    if (noDuplicate) {
      setColors((colors) => [...colors, randomColor]);
    } else {
      addRandomColor();
    }
  };

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
      <Container>
        <ChromePicker
          color={currentColor}
          className="color-picker"
          onChange={(e) =>
            dispatch({ type: 'UPDATE-CURRENT-COLOR', payload: e })
          }
        />
        <ValidatorForm onSubmit={addNewColor}>
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
            className="add-color"
            type="submit"
            sx={{ background: currentColor }}
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
`;

const Container = styled.div`
  width: 100%;
  .color-picker {
    width: 100% !important;
    margin-top: 1rem;
  }
  .add-color {
    width: 100%;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .colorNameInput {
    width: 100%;
    height: 70px;
  }
`;

export default DrawerContents;
