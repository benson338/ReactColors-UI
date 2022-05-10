import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function DraggableColorbox({ color, name, id }) {
  const { dispatch } = useGlobalContext();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Root
      color={color}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="boxContent">
        <span>{name}</span>
        <DeleteIcon
          className="deleteIcon"
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: 'DELETE-COLOR', payload: name });
          }}
        />
      </div>
    </Root>
  );
}

const Root = styled.div`
  background: ${(props) => props.color};
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

  .boxContent {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: black;
    letter-spacing: 1px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;

    .deleteIcon {
      transition: all 0.35s ease-in-out;
    }
  }
`;

export default DraggableColorbox;
