import { useDroppable } from '@dnd-kit/core';
import { useGlobalContext } from '../contexts/GlobalContext';
import DraggableColorbox from './DraggableColorbox';

function DroppableColorList() {
  const {
    newPaletteState: { colors },
  } = useGlobalContext();

  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div ref={setNodeRef} style={{ height: '100%' }}>
      {colors.map((color) => (
        <DraggableColorbox
          color={color.color}
          name={color.name}
          key={color.name}
        />
      ))}
    </div>
  );
}

export default DroppableColorList;
