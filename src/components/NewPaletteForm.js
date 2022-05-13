import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useGlobalContext } from '../contexts/GlobalContext';
import DndComponent from './DndComponent';
import ColorPickerForm from './ColorPickerForm';
import NewPaletteNav from './NewPaletteNav';

function NewPaletteForm() {
  const {
    palettes,
    newPaletteState: { open },
    dispatch,
    colors,
    setColors,
  } = useGlobalContext();

  const paletteIsFull = colors.length >= 20;

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

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <NewPaletteNav />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // display: 'flex',
            // alignItems: 'center',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => dispatch({ type: 'DRAWER-CLOSE' })}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Container>
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
          <ColorPickerForm paletteIsFull={paletteIsFull} />
        </Container>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <DndComponent />
      </Main>
    </Box>
  );
}

const drawerWidth = 350;

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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Container = styled('div')({
  width: '90%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  '.buttons': {
    width: '100%',
    '.button': {
      width: '50%',
    },
  },
});

export default NewPaletteForm;
