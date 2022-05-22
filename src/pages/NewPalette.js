import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { motion } from 'framer-motion';
import DndComponent from '../components/DndComponent';
import DrawerContents from '../components/DrawerContents';
import NewPaletteNav from '../components/NewPaletteNav';
import { useGlobalContext } from '../contexts/GlobalContext';
import { drawerWidth } from '../helpers/constants';

function NewPalette() {
  const {
    newPaletteState: { open },
    dispatch,
  } = useGlobalContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: '35vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: 'linear' }}
    >
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
          <DrawerContents />
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          <DndComponent />
        </Main>
      </Box>
    </motion.div>
  );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '9px',
    },
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

export default NewPalette;
