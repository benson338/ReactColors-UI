import bg from '../bg.svg';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from '@mui/material/ListItemText';
import { blue, red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion } from 'framer-motion';
import MiniPalette from '../components/MiniPalette';
import { useGlobalContext } from '../contexts/GlobalContext';
import sizes from '../helpers/sizes';

function PaletteList() {
  const {
    palettes,
    setPalettes,
    deleteState: { open, id },
    setDeleteState,
  } = useGlobalContext();

  const handleDelete = () => {
    setPalettes((palettes) => palettes.filter((palette) => palette.id !== id));
    setDeleteState((st) => ({ ...st, open: false }));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Root>
        <Container>
          <nav className="nav">
            <h1 className="logo">React Colors UI</h1>
            <Link to="/palette/new">
              <Button
                variant="outlined"
                className="create-btn"
                sx={{ color: 'white' }}
                color="white"
              >
                Create Palette
              </Button>
            </Link>
          </nav>
          <TransitionGroup className="palettes">
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={1000}>
                <MiniPalette {...palette} key={palette.id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Container>
        <Dialog open={open} aria-labelledby="delete-dialog-title">
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={handleDelete}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem
              button
              onClick={() => setDeleteState((st) => ({ ...st, open: false }))}
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: red[50], color: red[500] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </Root>
    </motion.div>
  );
}

const Root = styled.div`
  background-color: black;
  background: url(${bg}) no-repeat center center / cover;
  height: 100vh;
  display: flex;
  overflow: auto;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  ${sizes.down('lg')} {
    width: 70%;
  }
  ${sizes.down('md')} {
    // width: 60%;
    width: 70%;
  }
  ${sizes.down('sm')} {
    width: 75%;
  }
  ${sizes.down('xs')} {
    width: 75%;
  }

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: white;

    .logo {
      font-faimily: Roboto, 'Segoe UI', sans-serif;
      text-transform: uppercase;
      font-size: 2.5rem;
      font-weight: 300;
      word-spacing: 10px;
      line-height: 2.3rem;
      ${sizes.down('sm')} {
        font-size: 2rem;
      }
      ${sizes.down('md')} {
        font-size: 1.75rem;
      }
      ${sizes.down('xs')} {
        font-size: 1.5rem;
        word-spacing: 7px;
      }
      ${sizes.down('xxs')} {
        font-size: 1.4rem;
        word-spacing: 3px;
      }
    }

    .create-btn {
      font-size: 0.825rem;
      margin-bottom: -9px;
      ${sizes.down('md')} {
        font-size: 0.725rem;
        padding: 0.3rem 0.4rem;
        margin-bottom: -5px;
      }
      ${sizes.down('sm')} {
        font-size: 0.7rem;
        padding: 0.4rem;
        margin-bottom: -4px;
      }
      ${sizes.down('xs')} {
        font-size: 0.6rem;
        margin-bottom: -3px;
      }
      ${sizes.down('xxs')} {
        padding: 0.2rem;
        margin-bottom: 0;
      }
    }

    a {
      text-decoration: none;
    }
  }

  .palettes {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 5%;
    justify-content: center;
    ${sizes.down('md')} {
      grid-template-columns: repeat(2, 47.5%);
    }
    ${sizes.down('sm')} {
      gap: 4%;
    }
    ${sizes.down('xs')} {
      grid-template-columns: repeat(1, 80%);
      gap: 1%;
    }
    ${sizes.down('xxs')} {
      grid-template-columns: repeat(1, 100%);
      gap: 1%;
    }
  }
`;

export default PaletteList;
