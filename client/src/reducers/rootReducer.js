const initialState = {
  itemList: [],
  storeItemList: [],
  receivedList: [],
  storeReceivedList: [],
  currency: 0,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_ITEM_LIST':
      return { ...state, itemList: action.payload };
    case 'ADD_TO_STORE_ITEM_LIST':
      return { ...state, storeItemList: action.payload };
    case 'ADD_TO_RECEIVED_LIST':
      return { ...state, receivedList: action.payload };
    case 'ADD_TO_STORE_RECEIVED_LIST':
      return { ...state, storeReceivedList: action.payload };
    case 'UPDATE_CURRENCY':
      return { ...state, currency: action.payload };
    default:
      return state;
  }
}

export default reducer;
