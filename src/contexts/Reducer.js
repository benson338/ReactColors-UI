import { v4 as uuidv4 } from 'uuid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DRAWER-OPEN':
      return { ...state, open: true };
    case 'DRAWER-CLOSE':
      return { ...state, open: false };
    case 'UPDATE-CURRENT-COLOR':
      return { ...state, currentColor: action.payload.hex };
    case 'ADD-NEW-COLOR': {
      const newColor = {
        color: state.currentColor,
        name: state.newColorName,
        id: uuidv4(),
      };
      return {
        ...state,
        colors: [...state.colors, newColor],
        newColorName: '',
      };
    }
    case 'DELETE-COLOR':
      return {
        ...state,
        colors: state.colors.filter((color) => color.name !== action.payload),
      };
    case 'HANDLE-CHANGE':
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case 'SORT-COLORS':
      return { ...state, colors: action.payload };
    case 'CLEAR':
      return { ...state, newPaletteName: '' };
    default:
      return state;
  }
};

export default reducer;
