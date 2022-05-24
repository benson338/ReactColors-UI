import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import chroma from 'chroma-js';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { useGlobalContext } from '../contexts/GlobalContext';
import sizes from '../helpers/sizes';

function DraggableColorbox({ color, name, id }) {
  const { setColors } = useGlobalContext();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const isDarkColor = chroma(color).luminance() <= 0.1;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const deleteColor = (name) => {
    setColors((colors) => colors.filter((color) => color.name !== name));
  };

  return (
    <Root
      props={{ color, isDarkColor }}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon
          className="deleteIcon"
          onClick={() => {
            deleteColor(name);
          }}
          sx={{ color: 'rgba(0, 0, 0, 0.5)' }}
        />
      </div>
    </Root>
  );
}

const Root = styled.div`
  background: ${({ props }) => props.color};
  height: 25%;
  width: 20%;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -6.5px;
  text-transform: uppercase;
  &:hover .deleteIcon {
    color: white;
    transform: scale(1.3);
  }

  ${sizes.down('lg')} {
    width: 25%;
    height: 20%;
  }
  ${sizes.down('md')} {
    width: 50%;
    height: 10%;
  }
  ${sizes.down('sm')} {
    width: 100%;
    height: 4.9%;
    margin-bottom: -7px;
  }

  .boxContent {
    color: ${({ props }) =>
      props.isDarkColor ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    letter-spacing: 1px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;

    ${sizes.down('sm')} {
      margin-bottom: -0.5rem;
      margin-top: 0.3rem;
    }

    .deleteIcon {
      transition: all 0.35s ease-in-out;
    }
  }
`;

export default DraggableColorbox;
