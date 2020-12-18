const initialState = {
  itemList: [],
  receivedList: [],
  screenSize: { width: window.innerWidth, height: window.innerHeight },
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_ITEM_LIST':
      return { ...state, itemList: action.payload };
    case 'EDIT_RECEIVED_LIST':
      return { ...state, receivedList: action.payload };
    case 'SCREEN_SIZE_CHANGES':
      return { ...state, screenSize: action.payload };
    default:
      return state;
  }
}

export default mainReducer;
