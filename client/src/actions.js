export const editItemList = (items) => {
  return {
    type: 'EDIT_ITEM_LIST',
    payload: items,
  };
};

export const editReceivedList = (items) => {
  return {
    type: 'EDIT_RECEIVED_LIST',
    payload: items,
  };
};

export const updateCurrency = (currency) => {
  return {
    type: 'UPDATE_CURRENCY',
    payload: currency,
  };
};

export const changeUsingCurrency = (usingCurrency) => {
  return {
    type: 'CHANGE_USING_CURRENCY',
    payload: usingCurrency,
  };
};

export const changeTab = (tab) => {
  return {
    type: 'CHANGE_TAB',
    payload: tab,
  };
};

export const screenSizeChanges = (newSize) => {
  return {
    type: 'SCREEN_SIZE_CHANGES',
    payload: newSize,
  };
};

export const updateTime = (newTime) => {
  return {
    type: 'CHANGE_TIME',
    payload: newTime,
  };
};
