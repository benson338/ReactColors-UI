import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../contexts/GlobalContext';
import PaletteFormDialog from './PaletteFormDialog';
import { Link } from 'react-router-dom';

function NewPaletteNav() {
  const {
    newPaletteState: { open, dialogOpen },
    dispatch,
  } = useGlobalContext();

  return (
    <AppBar position="fixed" open={open} color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch({ type: 'DRAWER-OPEN' })}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Create A Palette
        </Typography>
      </Toolbar>
      <div className="nav-buttons">
        <Link to="/">
          <Button variant="contained" color="secondary" className="button">
            Go Back
          </Button>
        </Link>
        <Button
          variant="contained"
          className="button"
          onClick={() => dispatch({ type: 'DIALOG-OPEN' })}
        >
          Save
        </Button>
      </div>
      {dialogOpen && <PaletteFormDialog />}
    </AppBar>
  );
}

const drawerWidth = 350;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  '& .nav-buttons': {
    display: 'flex',
    marginRight: '1rem',
    '& a': {
      textDecoration: 'none',
    },
    '.button': {
      margin: '0 0.5rem',
    },
  },
}));

export default NewPaletteNav;
