import { useGlobalContext } from '../contexts/GlobalContext';
import { DndContext } from '@dnd-kit/core';
import { MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import DraggableColorbox from './DraggableColorbox';
import { useState } from 'react';

function DndComponent() {
  const {
    newPaletteState: { colors },
    dispatch,
  } = useGlobalContext();

  const [items, setItems] = useState(colors);

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 7 pixels before activating
    activationConstraint: {
      distance: 7,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 200ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 200,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleDragEnd(event) {
    // console.log(`i'm being dragged`);
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <SortableContext items={colors}>
        {colors.map((color) => (
          <DraggableColorbox
            color={color.color}
            name={color.name}
            key={color.name}
            id={color.id}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}

export default DndComponent;
