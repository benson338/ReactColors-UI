import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

function MiniPalette({ paletteName, emoji, colors, id }) {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/palette/${id}`);
  };
  const miniColorBoxes = colors.map((color) => (
    <div
      className="mini-color"
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));

  return (
    <Root onClick={handleClick}>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {paletteName} <span className="emoji">{emoji}</span>
      </h5>
    </Root>
  );
}

const Root = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  // overflow: hidden;
  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.9);
  }

  .colors {
    background: #dae1e4;
    // height: 130px;
    height: 125px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;

    .mini-color {
      height: 25%;
      width: 20%;
      display: inline-block;
      margin: 0 auto;
      position: relative;
      margin-bottom: -4.5px;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    // padding-top: 1rem;
    padding-top: 0.5rem;
    position: relative;

    .emoji {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

export default MiniPalette;
