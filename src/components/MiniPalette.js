import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../contexts/GlobalContext';
import sizes from '../helpers/sizes';

function MiniPalette({ paletteName, emoji, colors, id, inBuilt }) {
  const { setDeleteState } = useGlobalContext();

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/palette/${id}`);
  };

  const deletePalette = (e) => {
    e.stopPropagation();
    // setPalettes((palettes) => palettes.filter((palette) => palette.id !== id));
    setDeleteState({ open: true, id: id });
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
      {!inBuilt && (
        <DeleteIcon className="deleteIcon" onClick={deletePalette} />
      )}
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
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.85);
  }
  :hover .deleteIcon {
    opacity: 1;
  }

  .deleteIcon {
    color: white;
    background: #eb3d30;
    width: 20px;
    height: 20px;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: -1px;
    margin-top: -1px;
    padding: 8px;
    border-radius: 3px;
    z-index: 10;
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }

  .colors {
    background: #dae1e4;
    height: 135px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;

    ${sizes.down('lg')} {
      height: 130px;
    }
    ${sizes.down('md')} {
      height: 135px;
    }
    ${sizes.down('sm')} {
      height: 125px;
    }
    ${sizes.down('xs')} {
      height: 145px;
    }
    ${sizes.down('xxs')} {
      height: 140px;
    }

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
    padding-top: 0.75rem;
    // padding-top: 0.5rem;
    position: relative;
    font-size: 0.9rem;
    font-family: Roboto;

    .emoji {
      margin-left: 0.5rem;
      font-size: 1.2rem;
      margin-top: -2px;
    }
  }
`;

export default memo(MiniPalette);
