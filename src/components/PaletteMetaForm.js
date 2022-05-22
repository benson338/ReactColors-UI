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
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default function PaletteMetaForm() {
  const {
    palettes,
    setPalettes,
    newPaletteState: { newPaletteName, stage },
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

  const addEmojiAndSubmit = (emoji) => {
    const newPalette = { emoji: emoji.native };
    handleSubmit(newPalette);
  };

  const handleSubmit = (newPalette) => {
    newPalette = {
      ...newPalette,
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    setPalettes((st) => [...st, newPalette]);

    dispatch({ type: 'HIDE-FORM' });
    dispatch({ type: 'CLEAR-PALETTE' });
    navigate('/');
    setColors(palettes[0].colors);
  };

  return (
    <div>
      <Dialog
        open={stage === 'emoji'}
        onClose={() => dispatch({ type: 'HIDE-FORM' })}
        sx={{ transition: 'all 0.3s' }}
      >
        <DialogTitle>Choose a Palette Emoji</DialogTitle>
        <Picker title="Pick your emoji…" onSelect={addEmojiAndSubmit} />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        onClose={() => dispatch({ type: 'HIDE-FORM' })}
        sx={{ transition: 'all 0.3s' }}
      >
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => dispatch({ type: 'SHOW-EMOJI-PICKER' })}>
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
            <Button onClick={() => dispatch({ type: 'HIDE-FORM' })}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
