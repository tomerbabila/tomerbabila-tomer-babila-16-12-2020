const initialState = {
  itemList: [],
  storeList: [],
  receivedList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_ITEM_LIST':
      return { ...state, itemList: action.payload };
    case 'REMOVE_FROM_ITEM_LIST':
      return { ...state, itemList: action.payload };
    case 'ADD_TO_STORE_LIST':
      return { ...state, storeList: action.payload };
    case 'ADD_TO_RECEIVED_LIST':
      return { ...state, receivedList: action.payload };
    default:
      return state;
  }
}

export default reducer;
