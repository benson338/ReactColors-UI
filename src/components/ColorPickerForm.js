import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useGlobalContext } from '../contexts/GlobalContext';
import { v4 as uuidv4 } from 'uuid';
import styled from '@emotion/styled';

function ColorPickerForm({ paletteIsFull }) {
  const {
    newPaletteState: { currentColor, newColorName },
    dispatch,
    colors,
    setColors,
  } = useGlobalContext();

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
    <Container>
      <ChromePicker
        color={currentColor}
        className="color-picker"
        onChange={(e) => dispatch({ type: 'UPDATE-CURRENT-COLOR', payload: e })}
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
  );
}

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

export default ColorPickerForm;
