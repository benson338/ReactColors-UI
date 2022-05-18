import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../contexts/GlobalContext';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import { drawerWidth } from '../helpers/constants';

function NewPaletteNav() {
  const {
    newPaletteState: { open, formShowing },
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
          <AddToPhotosIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" className="Typography">
          Create A Palette
        </Typography>
      </Toolbar>
      {formShowing && <PaletteMetaForm />}
      <div className="nav-buttons">
        <Link to="/">
          <Button variant="contained" color="secondary" className="button">
            Go Back
          </Button>
        </Link>
        <Button
          variant="contained"
          className="button"
          onClick={() => dispatch({ type: 'SHOW-FORM' })}
        >
          Save
        </Button>
      </div>
    </AppBar>
  );
}

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
    [theme.breakpoints.down('sm')]: {
      marginRight: '0.4rem',
    },
    '& a': {
      textDecoration: 'none',
    },
    '.button': {
      margin: '0 0.5rem',
      [theme.breakpoints.down('sm')]: {
        margin: '0 0.2rem',
        padding: '0.4rem 0.5rem',
        fontSize: '0.75rem',
      },
    },
  },
  '.Typography': {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
    },
  },
}));

export default NewPaletteNav;
