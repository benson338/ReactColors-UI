import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

export default function PaletteFormDialog() {
  const {
    palettes,
    setPalettes,
    newPaletteState: { newPaletteName, dialogOpen },
    dispatch,
    colors,
    setColors,
  } = useGlobalContext();
  let navigate = useNavigate();

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  }, [palettes]);

  const handleSubmit = () => {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    setPalettes((st) => [...st, newPalette]);

    dispatch({ type: 'CLEAR-PALETTE' });
    dispatch({ type: 'DIALOG-CLOSE' });
    navigate('/');
    setColors(palettes[0].colors);
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => dispatch({ type: 'DIALOG-CLOSE' })}
    >
      <DialogTitle>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new beautiful palette. Make sure it's
            unique!
          </DialogContentText>
          <TextValidator
            label="Palette Name"
            name="newPaletteName"
            variant="filled"
            value={newPaletteName}
            fullWidth
            margin="normal"
            onChange={(e) => dispatch({ type: 'HANDLE-CHANGE', payload: e })}
            validators={['required', 'isPaletteNameUnique']}
            errorMessages={['Enter Palette Name', 'Name already used']}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch({ type: 'DIALOG-CLOSE' })}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
}
