import styled from '@emotion/styled';

// const RootWithObject = styled.div({
//   backgroundColor: 'white',
//   position: 'relative',
//   '& .title': {
//     color: 'pink',
//   },
// });

const Root = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  // overflow: hidden;
  :hover {
    cursor: pointer;
    background: pink;
  }

  .colors {
    background: #dae1e4;
    height: 130px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;

    .mini-color {
      height: 25%;
      width: 20%;
      display: inline-block;
      margin: 0 auto;
      position: relative;
      margin-bottom: -4px;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    padding-top: 1rem;
    position: relative;

    .emoji {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

function MiniPalette({ paletteName, emoji, colors }) {
  const miniColorBoxes = colors.map((color) => (
    <div
      className="mini-color"
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <Root>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {paletteName} <span className="emoji">{emoji}</span>
      </h5>
    </Root>
  );
}

export default MiniPalette;
