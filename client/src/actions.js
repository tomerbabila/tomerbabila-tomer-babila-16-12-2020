export const addToItemList = (items) => {
  return {
    type: 'ADD_TO_ITEM_LIST',
    payload: items,
  };
};

export const addToStoreItemList = (stores) => {
  return {
    type: 'ADD_TO_STORE_ITEM_LIST',
    payload: stores,
  };
};

export const addToReceivedList = (items) => {
  return {
    type: 'ADD_TO_RECEIVED_LIST',
    payload: items,
  };
};

export const addToStoreReceivedList = (stores) => {
  return {
    type: 'ADD_TO_STORE_RECEIVED_LIST',
    payload: stores,
  };
};

export const updateCurrency = (currency) => {
  return {
    type: 'UPDATE_CURRENCY',
    payload: currency,
  };
};
