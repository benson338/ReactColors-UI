const reducer = (state, action) => {
  switch (action.type) {
    case 'DRAWER-OPEN':
      return { ...state, open: true };
    case 'DRAWER-CLOSE':
      return { ...state, open: false };
    case 'SHOW-FORM':
      return { ...state, formShowing: true, stage: 'form' };
    case 'HIDE-FORM':
      return { ...state, formShowing: false, stage: '' };
    case 'SHOW-EMOJI-PICKER':
      return { ...state, stage: 'emoji' };
    case 'UPDATE-CURRENT-COLOR':
      return { ...state, currentColor: action.payload.hex };
    case 'HANDLE-CHANGE':
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case 'CLEAR-PALETTE':
      return { ...state, currentColor: 'teal', newPaletteName: '' };
    case 'CLEAR-COLOR-NAME':
      return { ...state, newColorName: '' };
    default:
      return state;
  }
};

export default reducer;
