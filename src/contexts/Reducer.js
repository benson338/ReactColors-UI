const reducer = (state, action) => {
  switch (action.type) {
    case 'DRAWER-OPEN':
      return { ...state, open: true };
    case 'DRAWER-CLOSE':
      return { ...state, open: false };
    case 'UPDATE-CURRENT-COLOR':
      return { ...state, currentColor: action.payload.hex };
    case 'ADD-NEW-COLOR': {
      const newColor = { color: state.currentColor, name: state.newColorName };
      return {
        ...state,
        colors: [...state.colors, newColor],
        newColorName: '',
      };
    }
    case 'HANDLE-CHANGE':
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case 'CLEAR':
      return { ...state, newPaletteName: '' };
    default:
      return state;
  }
};

export default reducer;
