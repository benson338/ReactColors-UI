import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import MiniPalette from '../components/MiniPalette';
import { useGlobalContext } from '../contexts/GlobalContext';

function PaletteList() {
  const { palettes } = useGlobalContext();

  return (
    <Root>
      <Container>
        <nav className="nav">
          <h1>React Colors UI</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className="palettes">
          {palettes.map((palette) => (
            <MiniPalette {...palette} key={palette.id} />
          ))}
        </div>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  justify-content: center;
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;

  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: white;

    a {
      color: white;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }

  .palettes {
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 5%;
  }
`;

// const RootWithObject = styled.div({
//   backgroundColor: 'white',
//   position: 'relative',
//   '& .title': {
//     color: 'pink',
//   },
// });

export default PaletteList;
