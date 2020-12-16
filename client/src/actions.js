export const addToItemList = (items) => {
  return {
    type: 'ADD_TO_ITEM_LIST',
    payload: items,
  };
};

export const removeFromItemList = (item) => {
  return {
    type: 'REMOVE_FROM_ITEM_LIST',
    payload: item,
  };
};

export const addToStoreList = (store) => {
  return {
    type: 'ADD_TO_STORE_LIST',
    payload: store,
  };
};

export const addToReceivedList = (item) => {
  return {
    type: 'ADD_TO_RECEIVED_LIST',
    payload: item,
  };
};
