const reducer = (state, action) => {
  switch (action.type) {
    case 'DRAWER-OPEN':
      return { ...state, open: true };
    case 'DRAWER-CLOSE':
      return { ...state, open: false };
    case 'DIALOG-OPEN':
      return { ...state, dialogOpen: true };
    case 'DIALOG-CLOSE':
      return { ...state, dialogOpen: false };
    case 'UPDATE-CURRENT-COLOR':
      return { ...state, currentColor: action.payload.hex };
    case 'HANDLE-CHANGE':
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case 'CLEAR-PALETTE':
      return { ...state, currentColor: 'blue', newPaletteName: '' };
    case 'CLEAR-COLOR-NAME':
      return { ...state, newColorName: '' };
    default:
      return state;
  }
};

export default reducer;
