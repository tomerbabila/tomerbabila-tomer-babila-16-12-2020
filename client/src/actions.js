export const editItemList = (items) => {
  return {
    type: 'EDIT_ITEM_LIST',
    payload: items,
  };
};

export const editStoreItemList = (stores) => {
  return {
    type: 'EDIT_STORE_ITEM_LIST',
    payload: stores,
  };
};

export const editReceivedList = (items) => {
  return {
    type: 'EDIT_RECEIVED_LIST',
    payload: items,
  };
};

export const editStoreReceivedList = (stores) => {
  return {
    type: 'EDIT_STORE_RECEIVED_LIST',
    payload: stores,
  };
};

export const updateCurrency = (currency) => {
  return {
    type: 'UPDATE_CURRENCY',
    payload: currency,
  };
};

export const changeTab = (tab) => {
  return {
    type: 'CHANGE_TAB',
    payload: tab,
  };
};
