const initialState = {
  itemList: [],
  storeItemList: [],
  receivedList: [],
  storeReceivedList: [],
  currency: 0,
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'EDIT_ITEM_LIST':
      return { ...state, itemList: action.payload };
    case 'EDIT_STORE_ITEM_LIST':
      return { ...state, storeItemList: action.payload };
    case 'EDIT_RECEIVED_LIST':
      return { ...state, receivedList: action.payload };
    case 'EDIT_STORE_RECEIVED_LIST':
      return { ...state, storeReceivedList: action.payload };
    case 'UPDATE_CURRENCY':
      return { ...state, currency: action.payload };
    default:
      return state;
  }
}

export default mainReducer;
