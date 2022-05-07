import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import DraggableColorbox from './DraggableColorbox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext';

function NewPaletteForm() {
  // const theme = useTheme();
  const [state, setState] = useState({
    open: false,
    currentColor: 'blue',
    newName: '',
    colors: [{ color: 'blue', name: 'blue' }],
  });
  const { open, currentColor, colors, newName } = state;

  const { setPalettes } = useGlobalContext();

  let navigate = useNavigate();

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

  const handleDrawerOpen = () => {
    setState((st) => ({ ...st, open: true }));
  };

  const handleDrawerClose = () => {
    setState((st) => ({ ...st, open: false }));
  };

  const updateCurrentColor = (color) => {
    // console.log(color);
    setState((st) => ({ ...st, currentColor: color.hex }));
  };

  const addNewColor = () => {
    const newColor = {
      color: state.currentColor,
      name: state.newName,
    };
    setState((st) => ({
      ...st,
      colors: [...st.colors, newColor],
      newName: '',
    }));
  };

  function handleChange(e) {
    setState((st) => ({ ...st, newName: e.target.value }));
  }

  const handleSubmit = () => {
    let newPaletteName = 'New Test Palette';
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors,
    };
    setPalettes((st) => [...st, newPalette]);
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          <Button variant="contained" onClick={handleSubmit}>
            Save Palette
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker color={currentColor} onChange={updateCurrentColor} />
        <ValidatorForm
          onSubmit={addNewColor}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            value={newName}
            onChange={handleChange}
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
            type="submit"
            sx={{ background: currentColor, marginTop: '2rem' }}
            // onClick={addNewColor}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {colors.map((color) => (
          <DraggableColorbox color={color.color} name={color.name} />
        ))}
      </Main>
    </Box>
  );
}

const drawerWidth = 380;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default NewPaletteForm;
